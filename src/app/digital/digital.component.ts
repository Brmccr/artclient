import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';
// import { JsonPipe } from '@angular/common';
// import { StarRatingColor } from '../star-rating/star-rating.component';


@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css'],
  providers: [ArtService]
})
export class DigitalComponent implements OnInit {
  // rating:number = 3;
  // starCount:number = 5;
  // starColor:StarRatingColor = StarRatingColor.accent;
  // starColorP:StarRatingColor = StarRatingColor.primary;
  // starColorW:StarRatingColor = StarRatingColor.warn;

  responsephotography ;
  regularDistribution = 100 / 4 + '%';
  constructor(private _artService: ArtService) {}

  ngOnInit() {
    this.getArtDigital();
  }

  // onRatingChanged(rating){
  //   console.log(rating);
  //   this.rating = rating;
  // }
  
  getArtDigital(): void {
    this._artService.getArtDigital().subscribe(res => {this.responsephotography = res; console.log(this.responsephotography)});
  }
}


// import { Component, OnInit } from '@angular/core';
// import {ArtService} from '../art.service';


// @Component({
//   selector: 'app-photography',
//   templateUrl: './photography.component.html',
//   styleUrls: ['./photography.component.css'],
//   providers: [ArtService]
// })
// export class PhotographyComponent implements OnInit {

//   responsephotography ;
//   constructor(private _artService: ArtService) {}

//   ngOnInit() {
//     this.getArtPhotography();
//   }
  
//   getArtPhotography(): void {
//     this._artService.getArtPhotography().subscribe(res => {this.responsephotography = res; console.log(this.responsephotography)});
//   }
// }
