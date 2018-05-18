import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    mode:number=0;
  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(user){
   console.log(user);
   return this.auth.login(user)
   .subscribe(resp=>{
     let jwt =resp.headers.get('Authorization');
     console.log(resp.headers.get('Authorization')); 
       },
      err=>{
         this.mode=1;
      });
  }

}
