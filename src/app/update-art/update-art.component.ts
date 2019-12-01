import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ArtService } from '../art.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-art',
  templateUrl: './update-art.component.html',
  styleUrls: ['./update-art.component.css'],
  providers: [ArtService]
})
export class UpdateArtComponent implements OnInit {
  responsephotography;
  id; 
  updateForm:  FormGroup;
 


  constructor(private _artService: ArtService, 
              private fb: FormBuilder,
              private _router: Router,
              private route: ActivatedRoute
              ) {this.route.params.subscribe( params => {console.log(params), this.id=params.id})
            
                
              }
  

  ngOnInit() {
    
    this.updateArt(this._artService.responsephotography.id)

    this.updateForm = new FormGroup({
      title: new FormControl(),
      artist: new FormControl(),
      price: new FormControl(),
      img: new FormControl(),
      genre: new FormControl(),
      description: new FormControl(),
  })


  }
  
  updateArt(id): void {
    this._artService.artUpdate(
      this.updateForm.value.title, 
      this.updateForm.value.artist, 
      this.updateForm.value.price, 
      this.updateForm.value.img, 
      this.updateForm.value.genre, 
      this.updateForm.value.description)

  }
  

  
}
