import { Injectable } from '@angular/core';
import { Group } from '../interfaces/group';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  CurrentGroup: Group | undefined

  constructor(private AuthService: AuthService) { }

  isGroupExisting(sGroupCountryName: string, sGroupGameName: string, sGroupRankName: string,){
    let groupExists: boolean = false

    this.AuthService.LoggedUserData?.groups?.forEach(group => {
      if(group.country.name === sGroupCountryName && group.game.name === sGroupGameName && group.rank.name === sGroupRankName){
        groupExists = true
      }
    });
    return groupExists
  }
}