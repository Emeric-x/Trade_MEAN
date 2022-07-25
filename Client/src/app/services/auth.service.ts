import { Injectable } from '@angular/core';
import { Group } from '../interfaces/group';
import { User } from '../interfaces/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false
  LoggedUserData: User | undefined // Save logged in user data

  constructor(private ApiService: ApiService) { }

  SignUpUser(sUser: User): Promise<any>{
    return this.ApiService.PostUser(sUser).toPromise()
  }

  SignInUser(sUserLogin: string, sUserPwd: string): Promise<any>{
    return this.ApiService.GetUserByLoginInfo(sUserLogin, sUserPwd).toPromise()
  }

  NewUserGroup(sGroup: Group): Promise<any>{
    return this.ApiService.AddUserGroup(this.LoggedUserData!._id!, sGroup).toPromise()
  }

  UpdateUserMatch(sUser_id: string, sMatch_id: string): Promise<any>{
    return this.ApiService.UpdateUserMatch(sUser_id, sMatch_id).toPromise()
  }
}
