import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// MDB Angular Free
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule} from 'angular-bootstrap-md';
import { AdminComponent } from './admin/admin.component';
import { UsermanageComponent } from './usermanage/usermanage.component';
import { UserinventorymanageComponent } from './userinventorymanage/userinventorymanage.component';
import { AdmininventorymanageComponent } from './admininventorymanage/admininventorymanage.component';
import { HallmanageComponent } from './hallmanage/hallmanage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ViewitemsComponent} from './viewitems/viewitems.component';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { AdminAuthGaurd, UserAuthGaurd } from './auth.gaurd';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UsermanageComponent,
    UserinventorymanageComponent,
    AdmininventorymanageComponent,
    HallmanageComponent,
    ViewitemsComponent,
    
  ],
  imports: [
    MDBBootstrapModule,
    BrowserModule,
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    IconsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    


    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AppService,AdminAuthGaurd,UserAuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
