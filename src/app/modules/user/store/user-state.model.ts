import {User} from "../../../shared/models/user.model";

export interface UserStateModel {
  users: User[] | null;
  limit: number;
  page: number;
}
