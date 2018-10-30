import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient,private router:Router) { }



  login(data){
    
    return this._http.post<any>('api/users/login',data);
    
  }

  loggedIn(){
    return !!localStorage.getItem("token");
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (err) {
      return null;
    }
  }


  getUserpermissions() {
    if (this.loggedIn()) {
      return this.getDecodedAccessToken(localStorage.getItem("token")).type;
    } else {
      return null;
    }
  }



  register(data){
    return this._http.post<any>('/api/users/register',data);
  }


  authenticateUser() {

    console.log(this.getUserpermissions());

    if (this.getUserpermissions() === "user") {
      console.log(this.getUserpermissions());
      
      this.router.navigate(["/addshop"]);
    }
    else if (this.getUserpermissions() === "Admin") {
     
      console.log(this.getUserpermissions());
      this.router.navigate(["/admin"]);

    }
    else {

    }
  }

  addShop(data){

    return this._http.post<any>('/api/users/addshop',data);
  }
  
}
