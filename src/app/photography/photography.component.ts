import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';


@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css'],
  providers: [ArtService]
})
export class PhotographyComponent implements OnInit {

  responsephotography ;
  constructor(private _artService: ArtService) {}

  ngOnInit() {
  }
  getArtPhotography(): void {
    this._artService.getArtPhotography().subscribe(res => {this.responsephotography = res; console.log(this.responsephotography)});
  }
}
