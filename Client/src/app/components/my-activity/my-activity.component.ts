import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.css']
})
export class MyActivityComponent implements OnInit {
  MyPosts: Post[] | undefined
  MyNormalPosts: Post[] | undefined
  MyRedyPosts: Post[] | undefined 
  UserAccepted: boolean = false
  RedyUser: any

  constructor(private PostService: PostService, private AuthService: AuthService) { }

  ngOnInit(): void {
    this.GetMyPosts()
  }

  async GetMyPosts(){
    this.MyPosts = await this.PostService.GetPostsByAuthorId(this.AuthService.LoggedUserData?._id!)
    this.SetMyPosts()
    console.log(this.MyNormalPosts)
    console.log(this.MyPosts)
    console.log(this.MyRedyPosts)
  }

  SetMyPosts(){
    this.MyPosts!.forEach((post: Post) => {
      if(post.redy === null) {
        this.MyNormalPosts?.push(post)
      }else{
        this.MyRedyPosts?.push(post)
      }
    });
  }
}
