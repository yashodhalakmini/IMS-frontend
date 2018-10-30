import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }


  private loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required,]
  });
}
