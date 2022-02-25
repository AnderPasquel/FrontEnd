import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserGridService {
  myAppUrl =  "https://localhost:44353/";
  myApiUrl = "api/Users";
  list: Users[];

  constructor( private http: HttpClient) 
  {
    this.list = [];
  }

  getUsers()
  { 
    return this.http.get(this.myAppUrl + this.myApiUrl).toPromise().then(data => {
      this.list = data as Users[];
    });
  }
}
