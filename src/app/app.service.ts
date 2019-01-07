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
    return this._http.post<any>('api/authenticate/login',data);

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



  // register(data){
  //   return this._http.post<any>('/api/users/register',data);
  // }


  authenticateUser() {

    console.log(this.getUserpermissions());

    if (this.getUserpermissions() === "user") {
      console.log(this.getUserpermissions());
      
      this.router.navigate(["/user"]);
    }
    else if (this.getUserpermissions() === "admin") {
     
      console.log(this.getUserpermissions());
      this.router.navigate(["/admin"]);

    }
    else {

    }
  }

  addUser(data){

     return this._http.post<any>('/api/users/add',data);
   }


  logout(){
    localStorage.clear();
  }

  searchUser(data){
   return this._http.post<any>("/api/users/search",data);
  }
  
  // deleteUser(data){
  //   return this._http.delete<any>("/api/users/delete",data);
  // }


  registerHall(data){
    return this._http.post<any>('/api/hall/add',data);
  }

  
  searchHall(data){
    return this._http.post<any>("/api/hall/search",data);
   }




  addItem(data){
    return this._http.post<any>("/api/inventory",data);
  }

  deleteItem(id){
    return this._http.delete("api/users"+id);
  }

  deleteUser(id){
    return this._http.delete("api/users/"+id);
  }

  updateUser(data){
    return this._http.put("api/users",data);
  }

  getItems(){
    return this._http.get("api/userinventory");
  }

}
