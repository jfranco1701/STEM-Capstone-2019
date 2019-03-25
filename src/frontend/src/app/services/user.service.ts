import { Injectable } from '@angular/core';
import { Userold } from '../models/userold';
import { USERS } from '../models/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Userold[] {
    return USERS;
  }
}
