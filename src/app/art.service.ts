import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Art } from './art.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  constructor(private http: HttpClient,
              private route: ActivatedRoute) {}
  baseUrl= 'http://localhost:3000/art'
  responsephotography: any;
  id;

  getArtPhotography(): Observable<any> {
    return this.http.get('http://localhost:3000/art/artgenrephotography')
  }
  getArtDigital(): Observable<any> {
    return this.http.get('http://localhost:3000/art/artgenredigital')
  }
  getArtDrawing(): Observable<any> {
    return this.http.get('http://localhost:3000/art/artgenredrawing')
  }
  getArtPainting(): Observable<any> {
    return this.http.get('http://localhost:3000/art/artgenrepaintings')
  }
  getArtAll(): Observable<any> {
    return this.http.get('http://localhost:3000/art/artgetall')
  }

  GetArtOne(id): Observable<any> {
    console.log(id);
    return this.http.get(`http://localhost:3000/art/${id}`)
  }

  createArt(title, artist, price, img, genre, description): any {
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders().set("Authorization", token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    console.log(token)
    console.log(headers)
  return this.http.post('http://localhost:3000/art/artcreate', {
    title,
    artist,
    price,
    img,
    genre,
    description,
}, { headers }).subscribe(data => {
    console.log(data)
  })
  }
 artUpdate(title, artist, price, img, genre, description): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${this.id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'token'
      })
      
  

      })
    }
  
  deleteArt(id): Observable<any> {
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders().set("Authorization", token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    console.log(token)
    console.log(headers)
    return this.http.delete(`http://localhost:3000/art/${id}`, {headers: headers})
  }
}
