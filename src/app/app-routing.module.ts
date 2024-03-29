import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTransfertsComponent } from './list-transferts/list-transferts.component';
import { CreateNationalTransferComponent } from './create-national-transfer/create-national-transfer.component';
import { NationalTransferMultipleComponent } from './national-transfer-multiple/national-transfer-multiple.component';
import { TransferServiceComponent } from './transfer-service/transfer-service.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientComponent } from './client/client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { AuthGuard } from './gaurds/auth.guard';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
const routes: Routes = [
  // ... other routes
  { path:'',pathMatch:'full',redirectTo:'login' },

  { path: 'list-transferts', component:ListTransfertsComponent, canActivate: [AuthGuard]  },
  {path: 'create-national-transfer', component:CreateNationalTransferComponent, canActivate: [AuthGuard]  },
  {path: 'national-transfer-multiple', component:NationalTransferMultipleComponent, canActivate: [AuthGuard]  },
  {path : 'transfer-service/:reference', component:TransferServiceComponent , canActivate: [AuthGuard]  },
  {path : 'login', component:LoginComponent   },
  {path : 'profile', component:ProfileComponent, canActivate: [AuthGuard]  },
  {path : 'clients', component:ClientComponent, canActivate: [AuthGuard]  },
  { path: 'client/:id', component:ClientDetailsComponent, canActivate: [AuthGuard]  },
  { path: 'otp-verification/:ref', component:OtpVerificationComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
