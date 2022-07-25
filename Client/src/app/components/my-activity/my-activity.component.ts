import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat';
import { Post } from 'src/app/interfaces/post';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
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
  MatchStart: boolean = false
  MatchReady: boolean = false
  RedyUsers: any = []
  ChatMessages: any = []

  constructor(private PostService: PostService, public AuthService: AuthService, public ChatService: ChatService) { }

  ngOnInit(): void {
    this.GetMyPosts()

    setInterval(async () => {
      if(this.AuthService.LoggedUserData?.match){
        this.ChatService.Chat = await this.ChatService.SetChat(this.AuthService.LoggedUserData?.match)
      }
    }, 1000);
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
    
    if(sPost.lookingFor.numberOfUsers === 0){
      this.MatchReady = true
    }
  }

  async NewChat(){
    let chat: Chat = { users: [] as any }
    chat.users.push({
      user_id: this.AuthService.LoggedUserData?._id!,
      firstname: this.AuthService.LoggedUserData?.firstname!,
      lastname: this.AuthService.LoggedUserData?.lastname!,
      login: this.AuthService.LoggedUserData?.login!,
      avatar: this.AuthService.LoggedUserData?.avatar!
    })

    this.RedyUsers.forEach((user: any) => {
      chat.users.push(user)
    });

    this.ChatService.Chat = await this.ChatService.NewChat(chat)

    this.ChatService.Chat?.users.forEach((user: any) => {
      this.AuthService.UpdateUserMatch(user.user_id, this.ChatService.Chat?._id!)
    });
    
    setInterval(() => {
      this.ChatService.RefreshChat()
    }, 1000);
  }

  async SendMessage(sMessageText: string){
    await this.ChatService.SendMessage(sMessageText, this.AuthService.LoggedUserData!)
  }
}
