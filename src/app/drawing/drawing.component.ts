import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css'],
  providers: [ArtService]
})
export class DrawingComponent implements OnInit {

  responsephotography ;
  constructor(private _artService: ArtService) {}

  ngOnInit() {
    this.getArtDrawing();
  }
  
  getArtDrawing(): void {
    this._artService.getArtDrawing().subscribe(res => {this.responsephotography = res; console.log(this.responsephotography)});
  }
}
