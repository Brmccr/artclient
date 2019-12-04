import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ArtService } from '../art.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateArtComponent } from '../update-art/update-art.component';
import { Observable } from 'rxjs';
import { ArtCreateComponent } from '../art-create/art-create.component'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArtService]
})
export class AdminComponent implements OnInit {
  response$: Observable<any>;
  dataSource = []
  responsephotography ;
  id;
  createForm: FormGroup;
  tableColumns : string[] = ['title', 'artist', 'price', 'img', 'genre', 'description']
  constructor(private _artService: ArtService, 
              private fb: FormBuilder,
              private router: ActivatedRoute,
              private _router: Router,
              public dialog: MatDialog) {}

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
    //this.createForm.reset()
    
  }
  /*  updateArt(event){
    event.preventDefault();
    const target = event.target
    const title = target.querySelector('#title').value
    const artist = target.querySelector('#artist').value
    const price = target.querySelector('#price').value
    const img = target.querySelector('#img').value
    const genre = target.querySelector('#genre').value
    const description = target.querySelector('#description').value
this._artService.artUpdate(this.id, title, artist, price, img, genre, description).subscribe(res => console.log(res))
    }*/
   
  getArtAll(): void {
    this._artService.getArtAll().subscribe(res => {this.dataSource = res; console.log(this.dataSource)});
   
  }
  openCreate(): void {
    const dialogRef = this.dialog.open(ArtCreateComponent, {
      
    })
    dialogRef.afterClosed().subscribe(res => {
      this.response$ = this._artService.createArt(res.title, res.artist,  res.price, res.img, res.genre, res.description)
      this.response$.subscribe(res => {
        console.log(res)
        this.getArtAll()
      })
    })
  }
  openUpdate(art): void {
    const dialogRef = this.dialog.open(UpdateArtComponent, {
      data: art
    })
    
  
  dialogRef.afterClosed().subscribe(res => {
    this.response$ = this._artService.artUpdate(res.id, res.title, res.artist,  res.price, res.img, res.description, res.genre)
    this.response$.subscribe(res => {
      console.log(res)
      this.getArtAll()
    })
  })
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



 




   
  



