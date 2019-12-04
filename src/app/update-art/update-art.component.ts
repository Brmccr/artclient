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
      title: new FormControl(this.data.title),
      artist: new FormControl(this.data.artist),
      price: new FormControl(this.data.price),
      img: new FormControl(this.data.img),
      genre: new FormControl(this.data.genre),
      description: new FormControl(this.data.description)
    })
   

  }
  

  

  
}
