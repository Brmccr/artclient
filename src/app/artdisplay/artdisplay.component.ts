import { Component, OnInit } from '@angular/core';
import { arts } from '../arts';
import { ArtService } from '../art.service';

@Component({
  selector: 'app-artdisplay',
  templateUrl: './artdisplay.component.html',
  styleUrls: ['./artdisplay.component.css'],
  providers: [ArtService]
})
export class ArtdisplayComponent implements OnInit {
  arts = arts;
  constructor(private ArtService: ArtService) {}

  ngOnInit() {
  }

}

