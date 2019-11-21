import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {}

  responsecomments: any;

  getArtComments(): Observable<any> {
    return this.http.get('http://localhost:3000/comment/commentsonart')
    
  }

  postComment(paragraph) {
    //post these details to server and return user info
    return this.http.post('http://localhost:3000/comment/commentpost', {
      paragraph
    }).subscribe(data => {
      console.log(data, "is what we got from the server")
    })
  }
}
