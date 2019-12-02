import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  constructor(private http: HttpClient) {}
  id;
  responsephotography: any;

  getArtPhotography(): Observable<any> {
    return this.http.get(`${APIURL}/art/artgenrephotography`)
  }
  getArtDigital(): Observable<any> {
    return this.http.get(`${APIURL}/art/artgenredigital`)
  }
  getArtDrawing(): Observable<any> {
    return this.http.get(`${APIURL}/art/artgenredrawing`)
  }
  getArtPainting(): Observable<any> {
    return this.http.get(`${APIURL}/art/artgenrepaintings`)
  }
  getArtOne(id): Observable<any> {
    console.log(id);
    return this.http.get(`${APIURL}/art/${id}`)
  }
  getArtAll(): Observable<any> {
    return this.http.get(`${APIURL}/art/artgetall`)
  }

  createArt(title, artist, price, img, genre, description): any {
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders().set("Authorization", token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    console.log(token)
    console.log(headers)
  return this.http.post(`${APIURL}/art/artcreate`, {
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
 
 
  // artUpdate(title, artist, price, img, genre, description): Observable<void> {
  //   return this.http.put<void>(`${this.baseUrl}/${this.id}`, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'token'
  //     })
      
  

  //     })
  //   }
  
  deleteArt(id): Observable<any> {
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders().set("Authorization", token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    console.log(token)
    console.log(headers)
    return this.http.delete(`${APIURL}/art/${id}`, {headers: headers})
  }


updateArt(id, title, artist, price, img, genre, description): Observable<any> {
    event.preventDefault();
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders().set("Authorization", token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    console.log(id)
    console.log(token)
    console.log(headers)
    return this.http.put(`${APIURL}/art/${id}`, {
        id,
        title,
        artist,
        price,
        img,
        genre,
        description
      }, {headers : headers})
  }




}
