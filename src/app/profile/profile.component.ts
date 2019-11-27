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

  // deleteArtComments(): void{
  //   this._commentsService.deleteArtComments(this.responsecomments.id);
  // }

  deleteComments(id){
    this._commentsService.deleteArtComments(id).subscribe(res => {
      this.responsecomments.splice(id, 1);
    })
  }


  updateComment(event, id) {
    event.preventDefault();
    const target = event.target
    const paragraph = target.querySelector('#paragraph').value
    this._commentsService.updateArtComments(paragraph, id).subscribe(res => {
      console.log(res)
      console.log(paragraph)
    })
  }

  
  panelOpenState = true;
  
  // updateComments(id, paragraph){
  //   const target = event.target
  //   const paragraph = target.querySelector('#paragraph').value
  //   this._commentsService.updateArtComments(id, paragraph)
  //   console.log(paragraph)
  //   }

  }
  // deleteArtComments(): void{
  //   this._commentsService.deleteArtComments(this.comment.id)
  // }
  // submitComment(event) {
  //   const target = event.target
  //   const paragraph = target.querySelector('#paragraph').value
  //   this._commentsService.postComment(paragraph)
  //   console.log(paragraph)
  // }
