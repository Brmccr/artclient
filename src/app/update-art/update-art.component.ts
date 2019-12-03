import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';



import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-art',
  templateUrl: './update-art.component.html',
  styleUrls: ['./update-art.component.css']
  
})
export class UpdateArtComponent implements OnInit {

 
  updateForm:  FormGroup;
  updatedArt


  constructor(
              private _fb: FormBuilder,
              public dialogRef: MatDialogRef<UpdateArtComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any
              ){}   
  

  ngOnInit() {
    console.log(this.data)
    this.updateForm = this._fb.group({
      id: this.data.id,
      title: this.data.title,
      artist: this.data.artist,
      price: this.data.price,
      img: this.data.img,
      genre: this.data.genre,
      description: this.data.description
    })
   

  }
  

  

  
}
