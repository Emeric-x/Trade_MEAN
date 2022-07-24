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
  MyNormalPosts: any = []  // set to any bc type Post[] = problems xd
  MyRedyPosts: any = []
  UsersAccepted: boolean = false
  RedyUsers: any = []
  ChatMessages: any = []

  constructor(private PostService: PostService, private AuthService: AuthService) { }

  ngOnInit(): void {
    this.GetMyPosts()
  }

  async GetMyPosts(){
    // set empty for the refresh button
    this.MyPosts = []
    this.MyNormalPosts = []
    this.MyRedyPosts = []

    this.MyPosts = await this.PostService.GetPostsByAuthorId(this.AuthService.LoggedUserData?._id!)
    this.SetMyPosts()
  }

  SetMyPosts(){
    this.MyPosts!.forEach((post: Post) => {
      if(post.redy?.length! < 1) {
        this.MyNormalPosts.push(post)
      }else{
        this.MyRedyPosts.push(post)
      }
    });
  }

  RedyUserAccepted(sRedyUser: any, sPost: Post){
    this.RedyUsers.push(sRedyUser)
    sPost.lookingFor.numberOfUsers--
    
    sPost.redy?.forEach((el, index) => {
      if(el.user.user_id === sRedyUser.user_id) { sPost.redy?.splice(index, 1) }
    });
  }
}
