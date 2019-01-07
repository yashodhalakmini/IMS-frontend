import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.scss']
})
export class ViewitemsComponent implements OnInit {
  private items;
 
  constructor(private service:AppService) { }

  ngOnInit() {
    this.getItems();
  }


  getItems(){
    this.service.getItems().subscribe(data=>{
      console.log(data);
      this.items=data;
    },err=>{});
  }

  

}
export class TableHeadOptionsComponent {
 
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];


 
}