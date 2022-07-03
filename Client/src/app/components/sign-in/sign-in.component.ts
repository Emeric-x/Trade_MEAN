import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private ApiService: ApiService, private AuthService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  SignIn(sUserLogin: string, sUserPassword: string){
    this.ApiService.GetAllUsers().subscribe((Result: any) => {
      Result.forEach((User: User) => {
        if(User.login === sUserLogin && User.password === sUserPassword){
          this.AuthService.isAuth = true
          this.AuthService.LoggedUserData = User
          this.router.navigate(['/Groups'])
        }
      });
    })
  }
}
