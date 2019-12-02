import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css'],
  providers: [ArtService]
})
export class DigitalComponent implements OnInit {
  responsephotography ;
  config: any;
  collection = { count: 10, responsephotography: [] }
  regularDistribution = 100 / 4 + '%';
  constructor(private _artService: ArtService) {
    for (let i = 1; i < this.collection.count; i++){
      this.collection.responsephotography.push(
        {
          id: i + 1,
          value: this.responsephotography + (i + 1)
        }
      );
    }

    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.collection.count
    }
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.getArtDigital();
  }
  
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
