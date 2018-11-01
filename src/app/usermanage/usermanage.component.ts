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
        username:[data.username],
        usertype:[data.usertype],
      });
    },err=>{
      console.log(err);
    });
  }

  // deleteUser(){
  //   if(this.registerForm.valid){
  //       this.service.deleteUser(this.registerForm.value).subscribe(data=>{
  //         console.log(data);
  //         this.responseMessage=data;
  //       },err=>{
  //         console.log(err);
  //       });
  //   }

  //   console.log(this.registerForm.value);
  // }

  ngOnInit() {
  }

}
