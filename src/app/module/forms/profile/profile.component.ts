import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  message = "";

  formGroupProfile = new FormGroup({
    name: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.required]),
  })

  constructor(
    private readonly profileService: ProfileService
  ) { }

  ngOnInit(): void {
  }

  submitProfileGet() {

    if( this.formGroupProfile.valid ) (
      this.profileService.postProfile(this.formGroupProfile.value).subscribe(
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

  submitProfilePost() {

    if( this.formGroupProfile.valid ) (
      this.profileService.postProfile(this.formGroupProfile.value).subscribe(
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
  