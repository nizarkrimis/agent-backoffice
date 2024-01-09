import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { HttpClientModule,HttpClient } from '@angular/common/http';


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
import { ClientComponent } from './client/client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

import { LoginServiceService } from './service/login-service.service';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';

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
    TransferServiceComponent,
    ClientComponent,
    ClientDetailsComponent,
    OtpVerificationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    // LoginServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
