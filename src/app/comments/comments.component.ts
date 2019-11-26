import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentsService]
})
export class CommentsComponent implements OnInit {

  responsecomments ;
  constructor(private _commentsService: CommentsService) {}

  ngOnInit() {
    this.getArtComments();
  }
  
  getArtComments(): void {
    this._commentsService.getArtComments().subscribe(res => {this.responsecomments = res; console.log(this.responsecomments)});
  }

  submitComment(event) {
    const target = event.target
    const paragraph = target.querySelector('#paragraph').value

    this._commentsService.postComment(paragraph)
    console.log(paragraph)
  }

  // signinUser(event) {
  //   const target = event.target
  //   const username = target.querySelector('#username').value
  //   const password = target.querySelector('#password').value
  //   this.Auth.getUserSignIn(username, password).subscribe(res => {
  //     console.log(res)
  //     localStorage.setItem('token', res.sessionToken)
  //   })
  //   console.log(username, password)
}
