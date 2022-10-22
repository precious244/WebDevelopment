import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  name: string = "";
  age: number = 0;
  job: string = "";

  constructor( 
    private readonly http: HttpClient
  ) { }

  getProfile(): Observable<any>{
    return this.http.get("dev/profile");
  }

  postProfile(body: any): Observable<any> {
    return this.http.post("dev/profile/update", body);
  }

  clearProfile() {
    this.name = "";
    this.age = 0;
    this.job = "";
  }
}