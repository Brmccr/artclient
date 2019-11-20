import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// For MDB Angular Free

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArtDisplayComponent } from './artdisplay/artdisplay.component';
import { ArtdetailsComponent } from './artdetails/artdetails.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtDisplayComponent,
    ArtdetailsComponent,
    CartComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    NgbModule,
    MatToolbarModule,
    NgModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
