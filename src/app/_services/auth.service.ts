import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Person } from '../_model/person';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/'
  constructor(private httpclient:HttpClient) { }
  register(person:Person){
return this.httpclient.post(`${this.baseUrl}user/register`,person)
  }
  login(person:Person){
    return this.httpclient.post(`${this.baseUrl}user/login`,{email:person.email,password:person.password})
      };
      isAuthenticated():boolean{
        if(localStorage.getItem('token'))
        {return true}else{ return false}
      }
}
