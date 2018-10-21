import { Injectable } from '@angular/core';

import { User } from '../model/user';
import { USERS } from '../data/users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _Users: User[];

  constructor() {
    this._Users = USERS;
  }
  getUsers(): Observable<User[]> {
    return of(this._Users);
  }
  getUser(id): Observable<User> {
    return of(this._Users[id]);
  }
  createUser(newUser: User) {
    this._Users.push(newUser);
    return this._Users.length - 1;
  }
}
