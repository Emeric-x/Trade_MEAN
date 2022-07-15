import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async SignIn(sUserLogin: string, sUserPassword: string){
    this.AuthService.LoggedUserData = await this.AuthService.SignInUser(sUserLogin, sUserPassword)

    if(this.AuthService.LoggedUserData){
      this.AuthService.isAuth = true
      this.router.navigate(['/Groups'])
    }
  }
}
