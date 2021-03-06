import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermanage',
  templateUrl: './usermanage.component.html',
  styleUrls: ['./usermanage.component.scss']
})
export class UsermanageComponent implements OnInit {

  constructor(private fb:FormBuilder,private service :AppService, private router:Router) { 
    this.search = fb.control("");
  }


  private search;
  private registerForm = this.fb.group({
    ID:['',Validators.required],
    username:['',Validators.required],
    usertype:['',Validators.required,],
    password:['',Validators.required,],
  });


  
  private responseMessage="";

  registerUser(){
    if(this.registerForm.valid){
        this.service.addUser(this.registerForm.value).subscribe(data=>{
        
          console.log(data);
          this.responseMessage=data;
        },err=>{
          console.log(err);
        });
    }

    console.log(this.registerForm.value);
  }

  

  searchUser(){
    console.log(this.search.value);
    this.service.searchUser({username:this.search.value}).subscribe(data=>{
      console.log(data);
      this.registerForm.patchValue({
        ID:data.ID,
        username:data.username,
        usertype:data.usertype,
        
      });
      
    },err=>{
      console.log(err);
    });
  }

  deleteUser(){
    if(this.registerForm.value.ID!=""){
        this.service.deleteUser(this.registerForm.value.ID).subscribe(data=>{
          console.log(data);
          
        },err=>{
          console.log(err);
        });
    }

    console.log(this.registerForm.value);
  }

  updateUser(){
    if(this.registerForm.value.ID!=""){
  
      this.service.updateUser({ID:this.registerForm.value.ID,username:this.registerForm.value.username,usertype:this.registerForm.value.usertype}).subscribe(data=>{
        console.log(data);
        
      },err=>{
        console.log(err);
      });
  }
  }

  ngOnInit() {
  }

}
