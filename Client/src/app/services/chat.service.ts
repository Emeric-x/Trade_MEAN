import { Injectable } from '@angular/core';
import { Chat } from '../interfaces/chat';
import { User } from '../interfaces/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  Chat: Chat | undefined

  constructor(private ApiService: ApiService) { }

  SetChat(sChat_id: string): Promise<any>{
    return this.ApiService.GetChatById(sChat_id).toPromise()
  }

  NewChat(sChat: Chat): Promise<any>{
    return this.ApiService.PostChat(sChat).toPromise()
  }

  GetChatById(sChat_id: string): Promise<any>{
    return this.ApiService.GetChatById(sChat_id).toPromise()
  }

  async RefreshChat() {
    this.Chat = await this.GetChatById(this.Chat?._id!)
  }

  SendMessage(sMessage: string, sUser: User): Promise<any>{
    let message: any = {
      author: {
        firstname: sUser.firstname,
        lastname: sUser.lastname,
        avatar: sUser.avatar
      },
      text: sMessage
    }
    return this.ApiService.PostChatMessage(message, this.Chat?._id!).toPromise()
  }
}
