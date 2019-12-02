import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { APIURL } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {}
  
  responsecomments: any;
  
  getArtComments(): Observable<any> {
    return this.http.get(`${APIURL}/comment/commentsonart`)
  }

  getUserComments(): Observable<any> {
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders().set("Authorization", token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    console.log(token)
    console.log(headers)
    return this.http.get(`${APIURL}/comment/comments`, {headers})
    }

  // postComment(paragraph) {
  //   const token = localStorage.getItem('token');
  //   let headers: HttpHeaders = new HttpHeaders().set("Authorization", token);
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('Authorization', token);
  //   console.log(token)
  //   console.log(headers)
  //   return this.http.post('http://localhost:3000/comment/commentpost', {
  //     paragraph,
  //   }, { headers }).subscribe(data => {
  //     console.log(data, "is what we got from the server")
  //   })
  // }

  postComment(paragraph, art_id) {
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders().set("Authorization", token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    console.log(token)
    console.log(headers)
    return this.http.post(`${APIURL}/comment/commentpost`, {
      paragraph, art_id,
    }, { headers }).subscribe(data => {
      console.log(data, "is what we got from the server")
    })
  }

  postCommentTest():any {
    event.preventDefault();
    return this.http.post(`${APIURL}/comment/commentpost`, {
      paragraph: "test"
    })
  }

  deleteArtComments(id): Observable<any> {
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders().set("Authorization", token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    console.log(id)
    console.log(token)
    console.log(headers)
    return this.http.delete<void>(`${APIURL}/comment/${id}`, 
    {headers : headers})
  }

  updateArtComments(paragraph, id): Observable<any> {
    event.preventDefault();
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders().set("Authorization", token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    console.log(id)
    console.log(token)
    console.log(headers)
    return this.http.put(`${APIURL}/comment/${id}`, {
      paragraph,
    }, 
    {headers : headers})
  }

  // ${this.responsecomments.comments.id}
  // + this.Response.comments.id

}

//   deleteArtComments(id: number): Observable<any> {
//     const token = localStorage.getItem('token');
//     let headers: HttpHeaders = new HttpHeaders().set("Authorization", token);
//     headers.append('Content-Type', 'application/json');
//     headers.append('Authorization', token);
//     console.log(token)
//     console.log(headers)
//     return this.http.delete<void>(`http://localhost:3000/comment/${id}`).subscribe(data => {
//       console.log(data, "is what we got from the server")
//     })
//   }
// }   



// router.delete('/post_jobs/:id',(req,res)=>{ let post_jobs_id = req.params.id })
