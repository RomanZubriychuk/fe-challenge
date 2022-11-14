export class FetchAllUsers {
  static readonly type = "[User] Fetch all users"

  constructor(public limit: number, public page: number) {
  }
}
