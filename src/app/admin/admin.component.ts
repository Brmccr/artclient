import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ArtService } from '../art.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArtService]
})
export class AdminComponent implements OnInit {
  dataSource = []
  responsephotography ;
  id;
  createForm: FormGroup;
  tableColumns : string[] = ['title', 'artist', 'price', 'img', 'genre', 'description']
  constructor(private _artService: ArtService, 
              private fb: FormBuilder,
              private router: ActivatedRoute,
              private _router: Router) {}

  ngOnInit() {
    this.getArtAll();
    

    this.createForm = new FormGroup({
      title: new FormControl(),
      artist: new FormControl(),
      price: new FormControl(),
      img: new FormControl(),
      genre: new FormControl(),
      description: new FormControl(),
  
    })
    this.createForm.valueChanges.subscribe(console.log)
    this.createForm.reset()


    }

  
  getArtAll(): void {
    this._artService.getArtAll().subscribe(res => {this.dataSource = res; console.log(this.dataSource)});
   
  }


 onSubmit() {
   this._artService.createArt(this.createForm.value.title, this.createForm.value.artist, this.createForm.value.price, this.createForm.value.img, this.createForm.value.genre, this.createForm.value.description).subscribe(res => {
     console.log(res)
   })
 }
  

 artDelete(id){
   this._artService.deleteArt(id).subscribe(res=> {
     this.dataSource.splice(id, 1);
   })
 }
 getArtOne(): void {
  this._artService.GetArtOne(this.id).subscribe(res => {this.responsephotography = res; console.log(this.responsephotography)});
}
  
}



 




   
  



