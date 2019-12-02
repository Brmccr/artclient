import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-in',
  templateUrl: './signup-in.component.html',
  styleUrls: ['./signup-in.component.css']
})
export class SignupInComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }
  signupUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    const displayname = target.querySelector('#displayname').value
    const firstname = target.querySelector('#firstname').value
    const lastname = target.querySelector('#lastname').value

    this.Auth.getUserDetails(username, password, displayname, firstname, lastname).subscribe(res => {
      console.log(res)
      localStorage.setItem('token', res.sessionToken)
    })
    console.log(username, password, displayname, firstname, lastname)
  }
  signinUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    this.Auth.getUserSignIn(username, password).subscribe(res => {
      console.log(res)
      localStorage.setItem('token', res.sessionToken)
    })
    console.log(username, password)
  }
}
