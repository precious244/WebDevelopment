import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  name: string = "";
  age: number = 0;
  job: string = "";

  constructor(
  ) { }

  

  clearLogin() {
    this.name = "";
    this.age = 0;
    this.job = "";
  }
}