import { Injectable } from '@angular/core';
import { Group } from '../interfaces/group';
import { Post } from '../interfaces/post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private ApiService: ApiService) { }

  PutPost(sPost: Post, sGroup: Group){
    this.ApiService.PutPost(sPost, sGroup).subscribe()
  }
}
