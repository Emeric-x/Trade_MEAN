import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

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
    console.log(body)
    return this.http.post(`http://localhost:3000/users`, body, {'headers':headers})
  }
}
