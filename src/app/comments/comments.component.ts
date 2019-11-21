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
  }
  getArtComments(): void {
    this._commentsService.getArtComments().subscribe(res => {this.responsecomments = res; console.log(this.responsecomments)});
  }

  // signupUser(event) {
  //   event.preventDefault()
  //   const target = event.target
  //   const username = target.querySelector('#username').value
  //   const password = target.querySelector('#password').value
  //   const displayname = target.querySelector('#displayname').value
  //   const firstname = target.querySelector('#firstname').value
  //   const lastname = target.querySelector('#lastname').value

  //   this.Auth.getUserDetails(username, password, displayname, firstname, lastname)
  //   console.log(username, password, displayname, firstname, lastname)
  // }
}
