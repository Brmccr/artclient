import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// For MDB Angular Free

import { RouterModule, Routes } from '@angular/router';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule, MatDialogRef, MatDialog} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// import { NgxPaginationModule } from 'ngx-pagination';
// import { RatingModule } from 'ng-starrating';




import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ArtdisplayComponent } from './artdisplay/artdisplay.component';
import { ArtcarouselComponent } from './artcarousel/artcarousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArtDetailComponent } from './art-detail/art-detail.component';
import { PhotographyComponent } from './photography/photography.component';
import { DigitalComponent } from './digital/digital.component';
import { PaintingComponent } from './painting/painting.component';
import { DrawingComponent } from './drawing/drawing.component';
import { AdminComponent } from '../app/admin/admin.component';

import { FormsModule } from '@angular/forms';

import { CommentsComponent } from './comments/comments.component';
import { SignupInComponent } from './signup-in/signup-in.component';
import { HomeComponent } from './home/home.component';
import { UpdateArtComponent } from './update-art/update-art.component';
import { AdminGuardService } from './admin-guard.service';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { ProfileComponent } from './profile/profile.component';

//import { AuthGuard } from './guards/auth.guard';
import { RoleGuardService } from './role-guard.service';
import { ArtCreateComponent } from './art-create/art-create.component';



const appRoutes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'display', component: ArtdisplayComponent},
  {path: 'detail/:id', component: ArtDetailComponent},
  {path: 'photography', component: PhotographyComponent},
  {path: 'digital', component: DigitalComponent},
  {path: 'painting', component: PaintingComponent},
  {path: 'drawing', component: DrawingComponent},
  {path: 'signup-in', component: SignupInComponent},
  {path: 'admin', 
  component: AdminComponent,
  //canActivate: [RoleGuardService],
         // data: {
         //  expectedRole: 'admin',},
         // children: [
           // {path: 'update-art/:id', component: UpdateArtComponent}
         // ]
        },
  
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArtdisplayComponent,
    ArtcarouselComponent,
    NavBarComponent,
    ArtDetailComponent,
    PhotographyComponent,
    DigitalComponent,
    PaintingComponent,
    DrawingComponent,
    CommentsComponent,
    AdminComponent,
    HomeComponent,
    SignupInComponent,
    UpdateArtComponent,
    
  
    
    
    SignupInComponent, 
    AdminComponent,
    HomeComponent,
    ProfileComponent,
    UpdateModalComponent,
    // StarRatingComponent,
    ArtCreateComponent,
    UpdateArtComponent,
    // BrowserModule,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    WavesModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    // NgbModal
  ], 
  entryComponents: [UpdateArtComponent, ArtCreateComponent],
  providers: [AdminGuardService, RoleGuardService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
  
})

export class AppModule { }