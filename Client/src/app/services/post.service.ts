import { Injectable } from '@angular/core';
import { Group } from '../interfaces/group';
import { Post } from '../interfaces/post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private ApiService: ApiService) { }

  PostPost(sPost: Post, sGroup_id: string){
    this.ApiService.PostPost(sPost, sGroup_id).subscribe()
  }
}
