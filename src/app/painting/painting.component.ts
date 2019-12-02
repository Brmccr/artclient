import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css'],
  providers: [ArtService]
})
export class PaintingComponent implements OnInit {
  
  regularDistribution = 100 / 4 + '%';
  responsephotography ;
  constructor(private _artService: ArtService) {}

  ngOnInit() {
    this.getArtPainting();
  }
  
  getArtPainting(): void {
    this._artService.getArtPainting().subscribe(res => {this.responsephotography = res; console.log(this.responsephotography)});
  }
}
