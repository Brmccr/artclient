import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {}

  responsecomments: any;

  getArtPhotography(): Observable<any> {
    return this.http.get('http://localhost:3000/art/artgenrephotography')
    
  }
  getArtDigital(): Observable<any> {
    return this.http.get('http://localhost:3000/art/artgenredigital')
  }
}
