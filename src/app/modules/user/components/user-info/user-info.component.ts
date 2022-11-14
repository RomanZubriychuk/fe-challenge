import {Component, OnDestroy, OnInit} from '@angular/core';
import { Select } from "@ngxs/store";
import { UserSelectors } from "@app/modules/user/store/user.selectors";
import { mergeMap, Observable, of, Subject, takeUntil } from "rxjs";
import { User } from "@shared/models/user.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy{
  @Select(UserSelectors.getSelectedUser) selectedUser$!: Observable<User>
  user: User | undefined;
  destroy = new Subject<void>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.selectedUser$
      .pipe(
        takeUntil(this.destroy),
        mergeMap(user => {
          // How to get single user?
          if (!user) this.navigateToList();
          return of(user)
        })
      )
      .subscribe(user => this.user = user)
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  navigateToList() {
    this.router.navigate(['users'])
  }
}
