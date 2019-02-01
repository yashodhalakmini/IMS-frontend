import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AdmininventorymanageComponent } from "./admininventorymanage/admininventorymanage.component";
import { AdminComponent } from "./admin/admin.component";
import { UserinventorymanageComponent } from "./userinventorymanage/userinventorymanage.component";
import { AdminAuthGaurd, UserAuthGaurd } from "./auth.gaurd";
import { HallmanageComponent } from "./hallmanage/hallmanage.component";
import { UsermanageComponent } from "./usermanage/usermanage.component";
import { ViewitemsComponent } from "./viewitems/viewitems.component";
// import { ViewitemsComponent } from "./viewitems/viewitems.Component";


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'login',component:LoginComponent},
    {path:'admin',component:AdminComponent},
    {path:'user',component:UserinventorymanageComponent},
    {path:'admininventory',component:AdmininventorymanageComponent},
    {path:'adminhallmanage',component:HallmanageComponent},
    {path:'adminusermanage',component:UsermanageComponent},
     {path:'adminviewitems',component:ViewitemsComponent}

   
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }