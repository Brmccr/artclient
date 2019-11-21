import { Component } from '@angular/core';
import { ArtService } from './art.service';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './auth.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  title = 'artclient';
  constructor(private http: HttpClient ) {}

  responsephotography: any;

  getArtPhotography() {
    this.http.get('http://localhost:3000/art/artgenrephotography')
    .subscribe((responsephotography) => {
      this.responsephotography = responsephotography;
      console.log(this.responsephotography)
    })
  }
  getArtDigital() {
    this.http.get('http://localhost:3000/art/artgenredigital')
    .subscribe((responsephotography) => {
      this.responsephotography = responsephotography;
      console.log(this.responsephotography)
    })
  }
  getArtDrawing() {
    this.http.get('http://localhost:3000/art/artgenredrawing')
    .subscribe((responsephotography) => {
      this.responsephotography = responsephotography;
      console.log(this.responsephotography)
    })
  }
  getArtPainting() {
    this.http.get('http://localhost:3000/art/artgenrepaintings')
    .subscribe((responsephotography) => {
      this.responsephotography = responsephotography;
      console.log(this.responsephotography)
    })
  }
}
