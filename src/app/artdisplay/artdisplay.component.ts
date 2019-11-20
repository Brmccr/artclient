import { Component, OnInit } from '@angular/core';
import { arts } from '../arts';

@Component({
  selector: 'app-artdisplay',
  templateUrl: './artdisplay.component.html',
  styleUrls: ['./artdisplay.component.css']
})
export class ArtdisplayComponent implements OnInit {
  arts = arts;
  constructor() { }

  ngOnInit() {
  }

}

