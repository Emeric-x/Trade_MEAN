import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = true;
  userData: any; // Save logged in user data

  constructor() { }
}
