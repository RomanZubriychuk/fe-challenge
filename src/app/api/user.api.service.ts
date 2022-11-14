import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { User } from "@shared/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  fetchUsers(limit: number, page: number): Observable<User[]> {
    const params = new HttpParams();
    params
      .append("results", limit)
      .append("page", page)
    return this.http.get<any>("api", {params}).pipe(map(res => res.results))
  }
}
