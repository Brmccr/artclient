import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artcarousel',
  templateUrl: './artcarousel.component.html',
  styleUrls: ['./artcarousel.component.css']
})
export class ArtcarouselComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }

  ngOnInit() {
  }

}
