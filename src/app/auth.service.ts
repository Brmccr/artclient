import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password, displayname, firstname, lastname) {
    //post these details to server and return user info
    return this.http.post('http://localhost:3000/user/register', {
      username,
      password,
      displayname,
      firstname,
      lastname
    }).subscribe(data => {
      console.log(data, "is what we got from the server")
    })
  }
}
