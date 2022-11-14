import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UserContainer } from './container/user.container';
import { NgxsModule } from "@ngxs/store";
import { UserState } from "./store/user.state";
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {path: "", component: UserContainer}
]

@NgModule({
  declarations: [
    UserContainer,
    UsersListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgxsModule.forFeature([UserState])
  ],
  exports: [RouterModule]
})
export class UserModule { }
