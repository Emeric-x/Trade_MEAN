import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private ApiService: ApiService) { }

  GetAllGames(): Promise<any>{
    return this.ApiService.GetAllGames().toPromise()
  }
}
