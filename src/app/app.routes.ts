import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AdmininventorymanageComponent } from "./admininventorymanage/admininventorymanage.component";
import { AdminComponent } from "./admin/admin.component";
import { UserinventorymanageComponent } from "./userinventorymanage/userinventorymanage.component";
import { AdminAuthGaurd, UserAuthGaurd } from "./auth.gaurd";
import { HallmanageComponent } from "./hallmanage/hallmanage.component";
import { UsermanageComponent } from "./usermanage/usermanage.component";


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'login',component:LoginComponent},
    {path:'admin',component:AdminComponent,canActivate:[AdminAuthGaurd]},
    {path:'user',component:UserinventorymanageComponent,canActivate:[UserAuthGaurd]},
    {path:'admininventory',component:AdmininventorymanageComponent},
    {path:'adminhallmanage',component:HallmanageComponent},
    {path:'adminusermanage',component:UsermanageComponent}
   
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }