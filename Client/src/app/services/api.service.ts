import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../interfaces/group';
import { User } from '../interfaces/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private AuthService: AuthService) { }

  GetAllGames() {
    return this.http.get(`http://localhost:3000/games`)
  }

  GetAllCountries() {
    return this.http.get(`http://localhost:3000/countries`)
  }

  GetAllUsers() {
    return this.http.get(`http://localhost:3000/users`)
  }

  PostUser(sNewUser: User){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(sNewUser);
    return this.http.post(`http://localhost:3000/users`, body, {'headers':headers})
  }

  PutUserGroup(sUserId: string, sUserGroup: Group){
    let userGroup: any = {
      country: {
        name: sUserGroup.country?.name,
        flag: sUserGroup.country?.flag
      },
      game: {
        name: sUserGroup.game?.name,
        description: sUserGroup.game?.description,
        logo: sUserGroup.game?.logo
      },
      rank: {
        name: sUserGroup.rank?.name,
        logo: sUserGroup.rank?.logo
      }
    }

    this.AuthService.LoggedUserData?.groups?.push(userGroup)
    
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(userGroup);
    return this.http.put(`http://localhost:3000/users/Groups/${sUserId}`, body, {'headers':headers})
  }
}
