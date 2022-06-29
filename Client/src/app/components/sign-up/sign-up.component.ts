import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private ApiService: ApiService, private router: Router, private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  Signup(sNewUserFirstname: string, sNewUserLastname: string, sNewUserLogin: string, sNewUserPassword: string){
    const newUser: User = {
      firstname: sNewUserFirstname,
      lastname: sNewUserLastname,
      login: sNewUserLogin,
      password: sNewUserPassword
    }

    this.ApiService.PostUser(newUser).subscribe(Result => {
      if(Result){
        this.AuthService.LoggedUserData = newUser
        this.AuthService.isAuth = true
        this.router.navigate(['/Games'])
      }
    })
  }
}
