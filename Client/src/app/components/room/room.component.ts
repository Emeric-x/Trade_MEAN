import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { AuthService } from 'src/app/services/auth.service';
import { GroupService } from 'src/app/services/group.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(public GroupService: GroupService, public AuthService: AuthService, private PostService: PostService) { }

  ngOnInit(): void {
  }

  NewPost(sPostMessage: string){
    let post: Post = {
      author: {
        author_id: this.AuthService.LoggedUserData!._id!,
        firstname: this.AuthService.LoggedUserData!.firstname,
        lastname: this.AuthService.LoggedUserData!.lastname,
        login: this.AuthService.LoggedUserData!.login,
        avatar: this.AuthService.LoggedUserData!.avatar
      },
      text: sPostMessage
    }

    this.PostService.PostPost(post, this.GroupService.CurrentGroup?._id!)
  }
}
