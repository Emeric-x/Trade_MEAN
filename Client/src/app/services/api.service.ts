import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../interfaces/group';
import { Post } from '../interfaces/post';
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

  GetAllGroups(){
    return this.http.get(`http://localhost:3000/groups`)
  }

  GetGroupById(sGroup_id: string){
    return this.http.get(`http://localhost:3000/groups/${sGroup_id}`)
  }

  GetGroupByTopicsNames(sGroup: any){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(sGroup);
    return this.http.post(`http://localhost:3000/groups/GetGroupByTopicsNames`, body, {'headers':headers})
  }

  PostUser(sNewUser: User){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(sNewUser);
    return this.http.post(`http://localhost:3000/users`, body, {'headers':headers})
  }

  PutUserGroup(sUserId: string, sUserGroup: Group){
    let userGroup: any = {
      _id: sUserGroup._id,
      topics: {
        country: {
          name: sUserGroup.topics.country?.name,
          flag: sUserGroup.topics.country?.flag
        },
        game: {
          name: sUserGroup.topics.game?.name,
          logo: sUserGroup.topics.game?.logo
        },
        rank: {
          name: sUserGroup.topics.rank?.name,
          logo: sUserGroup.topics.rank?.logo
        }
      }
    }

    this.AuthService.LoggedUserData?.groups?.push(userGroup)
    
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(userGroup);
    return this.http.put(`http://localhost:3000/users/Groups/${sUserId}`, body, {'headers':headers})
  }

  PostPost(sPost: Post, sGroup_id: string){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({
      post: sPost,
      group_id: sGroup_id
    });
    return this.http.post(`http://localhost:3000/posts`, body, {'headers':headers})
  }
}
