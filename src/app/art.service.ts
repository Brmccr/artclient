import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  constructor(private http: HttpClient) {}

  responsephotography: any;

  getArtPhotography(): Observable<any> {
    return this.http.get('http://localhost:3000/art/artgenrephotography')
    
  }
  getArtDigital(): Observable<any> {
    return this.http.get('http://localhost:3000/art/artgenredigital')
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
