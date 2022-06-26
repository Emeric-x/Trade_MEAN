import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GamesComponent } from './components/games/games.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent }, 
  { path: 'Games', canActivate:[AuthGuardService], component: GamesComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    HomeComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
