import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/interfaces/group';
import { ApiService } from 'src/app/services/api.service';
import { GroupService } from 'src/app/services/group.service';
import { Country } from 'src/app/interfaces/country';
import { Game } from 'src/app/interfaces/game';
import { Rank } from 'src/app/interfaces/rank';
import { AuthService } from 'src/app/services/auth.service';
import { GameService } from 'src/app/services/game.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  ListGames: any
  ListCountries: any
  ChoosedGame: Game | undefined
  ChoosedCountry: Country | undefined
  ChoosedRank: Rank | undefined

  constructor(private GameService: GameService,
    private CountryService: CountryService, 
    private GroupService: GroupService, 
    public router: Router,
    public AuthService: AuthService) { }

  async ngOnInit() {
    this.ListGames = await this.GameService.GetAllGames()
    this.ListCountries = await this.CountryService.GetAllCountries()
  }

  async SaveGroup(SaveData: boolean, sUserGroup: any){
    if(sUserGroup !== null){
      this.GroupService.CurrentGroup = await this.GroupService.GetGroupById(sUserGroup._id)
    }else{
      let group: Group = {
        topics: {
          country: {
            id: this.ChoosedCountry!._id,
            name: this.ChoosedCountry!.name,
            flag: this.ChoosedCountry!.flag
          },
          game: {
            id: this.ChoosedGame!._id,
            name: this.ChoosedGame!.name,
            description: this.ChoosedGame!.description,
            logo: this.ChoosedGame!.logo
          },
          rank: {
            name: this.ChoosedRank!.name,
            logo: this.ChoosedRank!.logo
          }
        }
      }

      this.GroupService.CurrentGroup = await this.GroupService.GetGroupByTopicsNames(group)
      group._id = this.GroupService.CurrentGroup?._id
      
      if(SaveData){
        if(this.GroupService.isUserAlreadyIn(group.topics.country.name, group.topics.game.name, group.topics.rank.name)){
          alert("You already have this group in your group list.")
        }else{
          this.AuthService.LoggedUserData?.groups?.push(await this.AuthService.NewUserGroup(group))
        }
      }
    }

    this.router.navigate(['/Room'])
  }
}
