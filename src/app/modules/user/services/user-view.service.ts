import { Injectable } from '@angular/core';
import {Store} from "@ngxs/store";
import {StateReset} from "ngxs-reset-plugin";
import {UserState} from "../store/user.state";
import {FetchAllUsers} from "../store/user.actions";

@Injectable({
  providedIn: 'root'
})
export class UserViewService {
  limit = 20;
  page = 1;
  constructor(private store: Store) { }

  reset() {
    this.store.reset(new StateReset(UserState))
  }

  init() {
    this.store.dispatch([
      new FetchAllUsers(this.limit, this.page)
    ])
  }
}
