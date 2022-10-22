import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) { }

  postLogin(body: any): Observable<any> {
    return this.http.post("dev/login", body);
    // return this.http.post("http://localhost:3040/login", body);
}

}
