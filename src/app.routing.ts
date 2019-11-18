import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { AuthGuard } from './app/guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


// Routing for the Angular app is configured as an array of Routes, each component is mapped to a 
// path so the Angular Router knows which component to display based on the URL in the browser 
// address bar. The home route is secured by passing the AuthGuard to the canActivate property 
// of the route. The Routes array is passed to the RouterModule.forRoot() method which 
// creates a routing module with all of the app routes configured, and also includes all of the 
// Angular Router providers and directives such as the <router-outlet></router-outlet> directive. 
// For more information on Angular Routing and Navigation see https://angular.io/guide/router.