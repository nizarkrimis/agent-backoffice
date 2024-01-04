import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTransfertsComponent } from './list-transferts/list-transferts.component';
import { CreateNationalTransferComponent } from './create-national-transfer/create-national-transfer.component';
import { NationalTransferMultipleComponent } from './national-transfer-multiple/national-transfer-multiple.component';

const routes: Routes = [
  // ... other routes
  { path: 'list-transferts', component:ListTransfertsComponent },
  {path: 'create-national-transfer', component:CreateNationalTransferComponent },
  {path: 'national-transfer-multiple', component:NationalTransferMultipleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
