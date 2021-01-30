import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor {

  constructor() { }
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      const token = localStorage.getItem('token')
     let reqclone
     if(token){
         const headers = new HttpHeaders({
              authorization:token
          })
      reqclone = req.clone({headers})}
      else{
        reqclone=req
      }
     // const reqclone = req.clone({headers:req.headers.append('authorization',`${token}`)})
     return next.handle(reqclone)
  }
}
