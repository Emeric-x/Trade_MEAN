import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private ApiService: ApiService) { }

  GetAllCountries(): Promise<any>{
    return this.ApiService.GetAllCountries().toPromise()
  }
}
