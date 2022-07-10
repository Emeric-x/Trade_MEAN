import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private ApiService: ApiService) { }

  PutPost(sPost: Post){
    this.ApiService.PutPost(sPost).subscribe()
  }
}
