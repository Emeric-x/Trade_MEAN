import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false;
  LoggedUserData: any; // Save logged in user data

  constructor() { }
}
