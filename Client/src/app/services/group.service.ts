import { Injectable } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { Game } from 'src/app/interfaces/game';
import { Rank } from 'src/app/interfaces/rank';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  ChoosedGame: Game | undefined
  ChoosedCountry: Country | undefined
  ChoosedRank: Rank | undefined

  constructor() { }
}
