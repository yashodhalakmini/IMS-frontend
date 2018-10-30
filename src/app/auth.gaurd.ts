import { Injectable } from "@angular/core";
import { CanActivate, Router, CanActivateChild } from "@angular/router";
import { AppService } from "./app.service";



@Injectable()


export class AdminAuthGaurd implements CanActivate {
    constructor(private appService: AppService, private router: Router) { }
    canActivate(): boolean {
        if(this.appService.loggedIn){

            if(this.appService.getUserpermissions()=="admin"){
                console.log("Saasasa");
                // this.router.navigate(["/user"]);
                return true;
            }else{
                this.router.navigate(["/login"]);
            }
                
        }
        else{
            this.router.navigate(["/login"]);
        }

    }
}

@Injectable()


export class UserAuthGaurd implements CanActivate {
    constructor(private appService: AppService, private router: Router) { }
    canActivate(): boolean {
        if(this.appService.loggedIn){
            if(this.appService.getUserpermissions()=="user"){
                // this.router.navigate(["/admin"]);
                return true;
            }else{
                this.router.navigate(["/login"]);
            }
        }
        else{
            console.log("sasaas");
            this.router.navigate(["/login"]);
        }

    }
}