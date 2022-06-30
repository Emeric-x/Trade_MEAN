import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  ListGames: any
  ListCountries: any

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.GetAllGames().subscribe(Result => {
      this.ListGames = Result
    })

    this.ApiService.GetAllCountries().subscribe(Result => {
      this.ListCountries = Result
    })
  }
}
