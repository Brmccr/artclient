import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  constructor(private http: HttpClient) {}
  id;
  responsephotography: any;

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
  getArtOne(id): Observable<any> {
    console.log(id);
    return this.http.get(`http://localhost:3000/art/${id}`)
  }
  getArtAll(): Observable<any> {
    return this.http.get('http://localhost:3000/art/artgetall')
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
    return this.http.delete(`http://localhost:3000/art/${id}`, {headers: headers})
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
    return this.http.put(`http://localhost:3000/art/${id}`, {
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
