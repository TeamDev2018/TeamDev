import { Injectable } from '@angular/core';

import { User } from '../model/user';
import { USERS } from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _Users: User[];

  constructor() {
    this._Users = USERS;
  }
  getUsers(): User[] {
    return this._Users;
  }
}
