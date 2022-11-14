import {Action, State, StateContext} from "@ngxs/store";
import {UserStateModel} from "./user-state.model";
import {Injectable} from "@angular/core";
import {FetchAllUsers} from "./user.actions";
import {UserService} from "../../../api/user.api.service";
import {tap} from "rxjs";

@State<UserStateModel>({
  name: "userState",
  defaults: {
    page: 1,
    limit: 20,
    users: null
  }
})
@Injectable()
export class UserState {
  constructor(private userApi: UserService) {
  }

  @Action(FetchAllUsers)
  fetchAllUsers(ctx: StateContext<UserStateModel>, {limit, page}: FetchAllUsers) {
    return this.userApi
      .fetchUsers(limit, page)
      .pipe(
        tap(users => {ctx.setState({...ctx.getState(), users})})
      )
  }
}
