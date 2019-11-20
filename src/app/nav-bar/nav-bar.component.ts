import { Component, OnInit } from '@angular/core';
import {ArtService} from '../art.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [ArtService]
})
export class NavBarComponent implements OnInit {

  constructor(private _artService: ArtService) {
    this._artService.getArtDigital();
   }

  ngOnInit() {
  }

}
