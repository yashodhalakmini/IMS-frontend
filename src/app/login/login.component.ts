import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private service :AppService, private router:Router) { }

  ngOnInit() {
    this.service.logout();
   
  }

  private error="";

  private loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required,]
  });


  login(){
    if(this.loginForm.valid){
      this.service.login(this.loginForm.value).subscribe(data=>{
        console.log(data);
        localStorage.setItem("token",data.token);
        this.service.authenticateUser();
        
        this.error="";
      },err=>{
        console.log(err);
        this.error="wrong password or user name ";
      });
    }
    
  }
}
