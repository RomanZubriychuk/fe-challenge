import { Action, State, StateContext } from "@ngxs/store";
import { UserStateModel } from "./user-state.model";
import { Injectable } from "@angular/core";
import {FetchAllUsers, SelectUser, UpdatePageParams} from "./user.actions";
import { tap } from "rxjs";
import { UserService } from "@api/user.api.service";

@State<UserStateModel>({
  name: "userState",
  defaults: {
    page: 1,
    limit: 10,
    users: null,
    selectedUser: null
  }
})
@Injectable()
export class UserState {
  constructor(private userApi: UserService) {
  }

  @Action(FetchAllUsers)
  fetchAllUsers(ctx: StateContext<UserStateModel>) {
    const {limit, page} = ctx.getState()
    return this.userApi
      .fetchUsers(limit, page)
      .pipe(
        tap(users => {ctx.setState({...ctx.getState(), users})})
      )
  }

  @Action(UpdatePageParams)
  updatePageParams(ctx: StateContext<UserStateModel>, {page, limit}: UpdatePageParams) {
    ctx.setState({...ctx.getState(), page, limit});
    ctx.dispatch(FetchAllUsers);
  }

  @Action(SelectUser)
  selectUser(ctx: StateContext<UserStateModel>, {user}: SelectUser) {
    ctx.setState({...ctx.getState(), selectedUser: user})
  }
}
