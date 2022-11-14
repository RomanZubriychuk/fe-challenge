import { User } from "@shared/models/user.model";

export class FetchAllUsers {
  static readonly type = "[User] Fetch all users"
}

export class UpdatePageParams {
  static readonly type = "[User] Update page params"
  constructor(public limit: number, public page: number) {
  }
}

export class SelectUser {
  static readonly type = "[User] Select User"
  constructor(public user: User) {
  }
}
