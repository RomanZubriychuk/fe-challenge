import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from "@shared/models/user.model";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
