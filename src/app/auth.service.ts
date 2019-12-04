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
  
  getUserDetails(username, passwordhash, displayname, firstname, lastname, role):any {
    //post these details to server and return user info
    return this.http.post('http://localhost:3001/user/register', {
      username,
      passwordhash,
      displayname, 
      firstname,
      lastname,
      role
      
    
    })
  }
  getUserSignIn(username, password):any {
    return this.http.post('http://localhost:3001/user/login', {
      username,
      password
    })
  }
 
    
  
}
