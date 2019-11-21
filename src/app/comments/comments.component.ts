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
}
