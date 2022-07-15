import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router, private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  async Signup(sNewUserFirstname: string, sNewUserLastname: string, sNewUserLogin: string, sNewUserPassword: string){
    const newUser: User = {
      firstname: sNewUserFirstname,
      lastname: sNewUserLastname,
      login: sNewUserLogin,
      password: sNewUserPassword,
      avatar: "ok"
    }

    this.AuthService.LoggedUserData = await this.AuthService.SignUpUser(newUser)

    if(this.AuthService.LoggedUserData){
      this.AuthService.isAuth = true
      this.router.navigate(['/Groups'])
    }
  }
}
