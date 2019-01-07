import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-admininventorymanage',
  templateUrl: './admininventorymanage.component.html',
  styleUrls: ['./admininventorymanage.component.scss']
})
export class AdmininventorymanageComponent implements OnInit {

  constructor(private fb:FormBuilder,private service: AppService) { }

  private itemForm = this.fb.group({
  id:['',Validators.required],
  hallname:["",Validators.required],
  itemtype:["",Validators.required],
  itemname:["",Validators.required],
  status:["",Validators.required]


    
  });

  ngOnInit() {
  }


  addItem(){
    console.log(this.itemForm.value);
    if(this.itemForm.valid){
     this.service.addItem(this.itemForm.value).subscribe(data=>{
        console.log("item added");
     },err=>{});
         
     
    }
    
  }


  deleteItem(){
    if(this.itemForm.value.id!=""){
      this.service.deleteItem(this.itemForm.value.id).subscribe(data=>{
        console.log(data);
      },err=>{
        console.log(err);
      });
    }
    console.log(this.itemForm.value);
    }
  
}
