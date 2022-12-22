import { Injectable } from '@angular/core';
import {post} from './post.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
  

})
export class PostsService {
  private posts:post[]=[];
  private PostUpdate = new Subject<post[]>();

  getUpdateListner(){
    return this.PostUpdate.asObservable();
  }
  constructor() { }
  addPost(title:string,content:string,dateTime:any){
    const post:post={title:title,content:content,dateTime: new Date()};
    this.posts.push(post);
    this.PostUpdate.next([...this.posts]);
  }
  getAll(){
    return [...this.posts];
  }
}
