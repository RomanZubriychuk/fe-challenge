import {Selector} from "@ngxs/store";
import {UserState} from "./user.state";
import {UserStateModel} from "./user-state.model";
import {User} from "@shared/models/user.model";

export class UserSelectors {
  @Selector([UserState])
  static getUsers(state: UserStateModel): User[] | null{
    return state.users
  }

  @Selector([UserState])
  static getPage(state: UserStateModel): number{
    return state.page
  }

  @Selector([UserState])
  static getLimit(state: UserStateModel): number{
    return state.limit
  }
}
