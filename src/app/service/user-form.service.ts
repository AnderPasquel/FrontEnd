import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  myAppUrl =  "https://localhost:44353/";
  myApiUrl = "api/Users";

  constructor( private http: HttpClient) 
  {
  }
  

  Login(username:string,password:string)
  { 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'server': 'Microsoft-IIS/10.0',
      'x-powered-by': 'ASP.NET'
    });

    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}
