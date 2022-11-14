import {Selector} from "@ngxs/store";
import {UserState} from "./user.state";
import {UserStateModel} from "./user-state.model";
import {User} from "../../../shared/models/user.model";

export class UserSelectors {
  @Selector([UserState])
  static getUsers(state: UserStateModel): User[] | null{
    return state.users
  }
}
