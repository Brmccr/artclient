import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [CommentsService]
})
export class ProfileComponent implements OnInit {

  responsecomments ;
  responseusercomments ;
  constructor(private _commentsService: CommentsService) {}

  ngOnInit() {
    this.getUserComments();
    // this.getArtComments();
  }
  
  getArtComments(): void {
    this._commentsService.getArtComments().subscribe(res => {this.responsecomments = res; console.log(this.responsecomments)});
  }

  getUserComments(): void {
    this._commentsService.getUserComments().subscribe(res => {this.responseusercomments = res; console.log(this.responseusercomments)});
  }

  deleteArtComments(): void{
    this._commentsService.deleteArtComments(this.responsecomments.id);
  }
  // deleteArtComments(): void{
  //   this._commentsService.deleteArtComments(this.comment.id)
  // }
  submitComment(event) {
    const target = event.target
    const paragraph = target.querySelector('#paragraph').value
    this._commentsService.postComment(paragraph)
    console.log(paragraph)
  }
}
