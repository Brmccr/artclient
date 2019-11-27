import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import {ArtService} from '../art.service';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css'],
  providers: [ArtService, CommentsService]
})
export class ArtDetailComponent implements OnInit {
  responseart ;
  id ;
  constructor(private route: ActivatedRoute, private _artService: ArtService, private _commentsService: CommentsService) {
    this.route.params.subscribe( params => {console.log(params), this.id=params.id});
   }

  ngOnInit() {
    this.getArtOne();
  }

  getArtOne(): void {
    this._artService.getArtOne(this.id).subscribe(res => {this.responseart = res; console.log(this.responseart)});
  }

  submitComment(event) {
    const target = event.target
    const art_id = this.id;
    const paragraph = target.querySelector('#paragraph').value
    this._commentsService.postComment(paragraph, art_id)
    console.log(paragraph)
  }

}
