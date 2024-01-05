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

const routes: Routes = [
  // ... other routes
  { path:'',pathMatch:'full',redirectTo:'login' },

  { path: 'list-transferts', component:ListTransfertsComponent },
  {path: 'create-national-transfer', component:CreateNationalTransferComponent },
  {path: 'national-transfer-multiple', component:NationalTransferMultipleComponent },
  {path : 'transfer-service', component:TransferServiceComponent },
  {path : 'login', component:LoginComponent },
  {path : 'profile', component:ProfileComponent },
  {path : 'clients', component:ClientComponent },
  { path: 'client/:id', component:ClientDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
