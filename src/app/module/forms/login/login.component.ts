import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message = "";

  formGroupLogin = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  })

  constructor(
    private readonly authService: AuthService
  ) { } 

  ngOnInit(): void {
  }

  submitLogin() {

    if( this.formGroupLogin.valid ) (
      this.authService.postLogin(this.formGroupLogin.value).subscribe(
        // next
        (response) => {
          alert("success");
          alert(JSON.stringify(response));
        },
        (error)=> {
          this.message= error.error.message;
        }
        )
      ); else{
        alert('Form Not Valid');
      }
  }  

}
