
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';



import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-art-create',
  templateUrl: './art-create.component.html',
  styleUrls: ['./art-create.component.css'],
  providers: []
})
export class ArtCreateComponent implements OnInit {
  createForm:  FormGroup;
  updatedArt

  constructor(private _fb: FormBuilder,
    public dialogRef: MatDialogRef<ArtCreateComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit() { 
    this.createForm = new FormGroup({
    title: new FormControl(),
    artist: new FormControl(),
    price: new FormControl(),
    img: new FormControl(),
    genre: new FormControl(),
    description: new FormControl(),

  })
  this.createForm.valueChanges.subscribe(console.log)
  }

}
