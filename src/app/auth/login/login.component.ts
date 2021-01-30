import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/_model/person';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
person:Person={email:"",password:""};
  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
  }
  onsubmit(){
    this.authservice.login(this.person).subscribe(
      (res)=>{
        localStorage.setItem('token',res['token'])
        console.log(res)},
      ()=>{},
      ()=>{}
    )
   }
}
