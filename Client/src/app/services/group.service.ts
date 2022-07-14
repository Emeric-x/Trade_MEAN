import { Injectable } from '@angular/core';
import { Group } from '../interfaces/group';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  CurrentGroup: Group | undefined

  constructor(private AuthService: AuthService, private ApiService: ApiService) { }

  isUserAlreadyIn(sGroupCountryName: string, sGroupGameName: string, sGroupRankName: string){
    let UserIn: boolean = false

    this.AuthService.LoggedUserData?.groups?.forEach(group => {
      if(group.topics.country.name === sGroupCountryName && group.topics.game.name === sGroupGameName && group.topics.rank.name === sGroupRankName){
        UserIn = true
      }
    });
    return UserIn
  }

  GetGroupById(sGroup_id: string){
    this.ApiService.GetGroupById(sGroup_id).subscribe((Result: any) => {
      this.CurrentGroup = Result
    })
  }

  GetGroupByTopicsNames(sGroup: any){
    this.ApiService.GetGroupByTopicsNames(sGroup).subscribe((Result: any) => {
      this.CurrentGroup = Result
    })
  }
}
