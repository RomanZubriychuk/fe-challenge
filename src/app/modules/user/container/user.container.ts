import { Component, OnInit } from '@angular/core';
import { UserViewService } from "../services/user-view.service";
import { Observable } from "rxjs";
import { UserSelectors } from "../store/user.selectors";
import { Select } from "@ngxs/store";
import { User } from "@shared/models/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.container.html',
  styleUrls: ['./user.container.scss']
})
export class UserContainer implements OnInit {

  @Select(UserSelectors.getUsers) users$!: Observable<User[]>;
  @Select(UserSelectors.getPage) page$!: Observable<number>;
  @Select(UserSelectors.getLimit) limit$!: Observable<number>;

  constructor(
    private userViewService: UserViewService
  ) { }

  ngOnInit(): void {
    this.userViewService.init();
  }

}
