import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [ArtService]
})
export class NavBarComponent implements OnInit {
  
  responsephotography ;
  constructor(private _artService: ArtService) {}
  
  ngOnInit() {
  }
  getArtDigital(): void {
    this._artService.getArtDigital().subscribe(res => {this.responsephotography = res; console.log(this.responsephotography)});
  }
  getArtPhotography(): void {
    this._artService.getArtPhotography().subscribe(res => {this.responsephotography = res; console.log(this.responsephotography)});
  }

  logOut() {
    localStorage.clear();
  }

  
}

// const clearToken = () => {
//   localStorage.clear();
//   setSessionToken('')
// }
