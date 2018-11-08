import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { USERS } from '../data/users';
import { Observable, of } from 'rxjs';

/**
 * The UserService provides read/write access to {@link User}s
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * @ignore
   */
  private _Users: User[];

  /**
   * @ignore
   */
  constructor() {
    this._Users = USERS;
  }
  /**
   * Get a an Array of all Users
   * @returns {Observable<User[]>} An Observable that resolves to an array of Users
   */
  getUsers(): Observable<User[]> {
    return of(this._Users);
  }
  /**
   * Return the {@link User} with the given id
   * @param {number} id The id of the User
   * @returns {Observable<User>} An Observable that resolves to a single User
   */
  getUser(id: number): Observable<User> {
    return of(this._Users[id]);
  }
  /**
   * Creates a new {@link User} and persists him to the database
   * @param {User} user The User-Object that should be created
   * @returns {number} The id of the newly created User
   */
  createUser(newUser: User): number {
    this._Users.push(newUser);
    return this._Users.length - 1;
  }
}
