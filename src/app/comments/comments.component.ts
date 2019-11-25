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
    // this.postCommentTest();
  }
  
  getArtComments(): void {
    this._commentsService.getArtComments().subscribe(res => {this.responsecomments = res; console.log(this.responsecomments)});
  }

  deleteComments(id){
    this._commentsService.deleteArtComments(id).subscribe(res => {
      this.responsecomments.splice(id, 1);
    })
  }


  updateComment(id, event) {
    const target = event.target
    const paragraph = target.querySelector('#paragraph').value
    this._commentsService.updateArtComments(id, paragraph)
    console.log(paragraph)
  }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }

  // postCommentTest(): void{
  //   this._commentsService.postCommentTest().subscribe(res => {this.responsecomments = res; console.log(this.responsecomments)});
  // }

  // postComment(): void{
  //   this._commentsService.postComment().subscribe(res => {this.responsecomments = res; console.log(this.responsecomments)});
  // }
  // deleteArtComments(): void{
  //   this._commentsService.deleteArtComments(this.comment.id)
  // }
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
