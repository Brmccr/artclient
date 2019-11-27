import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private loggedinStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false')
  
  constructor(private http: HttpClient) { }

  // setLoggedIn(value: boolean) {
  //   this.loggedinStatus = value
  //   localStorage.setItem('loggedIn', 'true')
  // }

  // get isLoggedIn() {
  //   return JSON.parse(localStorage.getItem('loggedIn') || this.loggedinStatus.toString())
  // }

  getUserDetails(username, passwordhash, displayname, firstname, lastname):any {
    //post these details to server and return user info
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders().set("Authorization", token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    console.log(token)
    console.log(headers)
    return this.http.post('http://localhost:3000/user/register', {
      username,
      passwordhash,
      displayname,
      firstname,
      lastname
    })
  }
  getUserSignIn(username, password):any {
    return this.http.post('http://localhost:3000/user/login', {
      username,
      password
    })
  }
}
