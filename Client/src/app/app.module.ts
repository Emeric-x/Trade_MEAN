import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GroupsComponent } from './components/groups/groups.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RoomComponent } from './components/room/room.component';
import { MyActivityComponent } from './components/my-activity/my-activity.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Signin', component: SignInComponent },
  { path: 'Signup', component: SignUpComponent }, 
  { path: 'Groups', canActivate:[AuthGuardService], component: GroupsComponent },
  { path: 'Room', canActivate:[AuthGuardService], component: RoomComponent },
  { path: 'my-activity', canActivate:[AuthGuardService], component: MyActivityComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    HomeComponent,
    FourOhFourComponent,
    SignInComponent,
    SignUpComponent,
    RoomComponent,
    MyActivityComponent
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
