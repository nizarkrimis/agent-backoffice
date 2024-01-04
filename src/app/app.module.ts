import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTransfertsComponent } from './list-transferts/list-transferts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateNationalTransferComponent } from './create-national-transfer/create-national-transfer.component';
import { FormsModule } from '@angular/forms';
import { NationalTransferMultipleComponent } from './national-transfer-multiple/national-transfer-multiple.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { TransferServiceComponent } from './transfer-service/transfer-service.component'; 
// Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    ListTransfertsComponent,
    NavbarComponent,
    CreateNationalTransferComponent,
    NationalTransferMultipleComponent,
    LoginComponent,
    ProfileComponent,
    TransferServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
