import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
  }

  Signup(sNewUserFirstname: string, sNewUserLastname: string, sNewUserLogin: string, sNewUserPassword: string){
    //faire une interface pour pouvoir passer un objet user directement a postuser (au lieu de passer le login, le mdp, le nom etc)
    this.ApiService.PostUser()
  }
}
