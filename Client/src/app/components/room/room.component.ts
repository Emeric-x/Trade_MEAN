import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(public GroupService: GroupService, public AuthService: AuthService) { }

  ngOnInit(): void {
  }

  NewPost(sPostMessage: string){
    //create post object and then pass it to this.ApiService.PutPost
  }
}
