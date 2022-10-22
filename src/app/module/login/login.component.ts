import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = "";
  age: number = 0;
  job: string = "";


  text: any;

  constructor(
    public readonly loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.name = "Sophie";
    this.loginService.age = 22;
    this.loginService.job = "FG";

    this.name = this.loginService.name;
    this.age = this.loginService.age;
    this.job = this.loginService.job;
  }

  FunctionLogin(event: any){
    this.text = event;
  }

  clear() {
    this.loginService.clearLogin();
  }

}