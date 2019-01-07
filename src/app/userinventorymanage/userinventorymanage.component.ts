import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-userinventorymanage',
  templateUrl: './userinventorymanage.component.html',
  styleUrls: ['./userinventorymanage.component.scss']
})
export class UserinventorymanageComponent implements OnInit {

  constructor(private fb:FormBuilder,private service: AppService) { }

  private itemForm = this.fb.group({
    id:['',Validators.required],
    itemhall:["",Validators.required],
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

  // deleteItem(){
  // if(this.itemForm.value.id!=""){
  //   this.service.deleteItem(this.itemForm.value.id).subscribe(data=>{},err=>{});
  // }
  // }


}
