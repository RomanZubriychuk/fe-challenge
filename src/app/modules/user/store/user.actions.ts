export class FetchAllUsers {
  static readonly type = "[User] Fetch all users"
}

export class UpdatePageParams {
  static readonly type = "[User] Update page params"
  constructor(public limit: number, public page: number) {
  }
}
