import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hallmanage',
  templateUrl: './hallmanage.component.html',
  styleUrls: ['./hallmanage.component.scss']
})
export class HallmanageComponent implements OnInit {

  constructor(private fb:FormBuilder,private service :AppService, private router:Router) {
    this.search = fb.control("");
   }

   private search;
  private registerForm = this.fb.group({
    ID:['',Validators.required],
    hallname:['',Validators.required],
    // usertype:['',Validators.required,],
    // password:['',Validators.required,],
  });

  private responseMessage="";

  registerHall(){
    if(this.registerForm.valid){
        this.service.registerHall(this.registerForm.value).subscribe(data=>{
          console.log(data);
          this.responseMessage=data;
        },err=>{
          console.log(err);
        });
    }

    console.log(this.registerForm.value);
  }

  searchHall(){
    console.log(this.search.value);
    this.service.searchHall({username:this.search.value}).subscribe(data=>{
      console.log(data);
      this.registerForm.patchValue({
        // ID:[data.ID],
        hallname:[data.hallname]
        // usertype:[data.usertype],
      });
    },err=>{
      console.log(err);
    });
  }


  ngOnInit() {
  }

  // registerhall(){
  //   console.log(this.registerForm.value);
  //   if(this.registerForm.valid){
  //    this.service.additem(this.registerForm.value).subscribe(data=>{
  //       console.log("Hall added");
  //    },err=>{});
       
  //   }
    
  // }

  deletehall(){
    if(this.registerForm.value.id!=""){
      this.service.deleteItem(this.registerForm.value.id).subscribe(data=>{},err=>{});
    }
    }

}
