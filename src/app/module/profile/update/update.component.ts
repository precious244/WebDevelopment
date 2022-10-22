import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  displayName: any;

  formGroupUpdate = new FormGroup({
    name: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(10)]),
    birthdate: new FormControl(""),
    address: new FormControl(""),
  });

  ProfileserviceService: any;
  profile: any;

  constructor() { 

    this.formGroupUpdate.controls["name"].setValue("Sophia Pontoh");
    this.formGroupUpdate.get("birthdate")?.setValue("18 Juli 2000");
  }

  ngOnInit(): void {

    this.ProfileserviceService.getProfile().subscribe(
      (next: string) => {
        this.profile.push(next);
      },
      (error: any) => {
        this.profile.push('error');
      },
      () => {
        this.profile.push('complete');
      }
    );

    this.ProfileserviceService.postProfile().subscribe(
      (next: string) => {
        this.profile.push(next);
      },
      (error: any) => {
        this.profile.push('error');
      },
      () => {
        this.profile.push('complete');
      }
    );
  }

  submitButtonClick() {
    this.displayName= this.formGroupUpdate.controls["name"].value;
  }

  checkValidation() {
    alert(this.formGroupUpdate.controls["email"].valid);
  }

}
