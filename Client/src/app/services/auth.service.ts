import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false
  LoggedUserData: User | undefined // Save logged in user data

  constructor() { }
}
