import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/_model/person';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
person: Person={email:"",password:"",repeatedPassword:""};
  constructor(private authservice :AuthService) { }

  ngOnInit(): void {
  }
onsubmit(){
  this.authservice.register(this.person).subscribe(
    (res)=>{console.log(res)},
    (err)=>{console.log(err)},
    ()=>{}
  )
}
}
