import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  ListGames: any = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.GetAllGames().subscribe(Result => {
      this.ListGames = Result
    })
  }

}
