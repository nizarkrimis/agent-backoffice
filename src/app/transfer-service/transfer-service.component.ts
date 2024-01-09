import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransfertsService } from '../service/transferts.service';

@Component({
  selector: 'app-transfer-service',
  templateUrl: './transfer-service.component.html',
  styleUrls: ['./transfer-service.component.css']
})
export class TransferServiceComponent {

  reference: string | null='';
  // orderIssuer: any;
  // transferInfo: any;
  // beneficiaryInfo: null;
  errorMessage: string='';
  transfer:any;
  beneficiary:any;
  customer:any;

  // public searchTransfer(): void {
  //   // Réinitialiser les données
  //   // this.orderIssuer = null;
  //   // this.transferInfo = null;
  //   this.beneficiaryInfo = null;

  //   this.orderIssuer = {
  //     agentId: '123',
  //     wallet: 'wallet123',
  //     fullName: 'ghada ahl mbarek',
  //     emissionDate: '2023-01-01'
  //   };

  //   this.transferInfo = {
  //     amount: 100,
  //     beneficiaryFullName: 'krimis nizar',
  //   };
  
  //   // Simuler la récupération des données du transfert
  //   // Remplacez cela par un appel à un service ou une API dans une application réelle
  //   // if (this.reference === '123456') {
  //   //   this.orderIssuer = {
  //   //     agentId: '123',
  //   //     wallet: 'wallet123',
  //   //     fullName: 'ghada ahl mbarek',
  //   //     emissionDate: '2023-01-01'
  //   //   };

  //   //   this.transferInfo = {
  //   //     amount: 100,
  //   //     beneficiaryFullName: 'krimis nizar',
  //   //   };

  //   // } else {
  //   //   // Afficher un message d'erreur si la référence n'est pas trouvée
  //   //   this.errorMessage = 'Reference not found !';
  //   // }
  // }

  constructor(private route:ActivatedRoute,private transferService:TransfertsService){}
  ngOnInit(){
    this.reference=this.route.snapshot.paramMap.get('reference');
    // console.log(this.reference)
    this.transferService.getTransferByRef(this.reference).subscribe((response:any)=>{
      console.log(response);
      this.transfer=response.transferDTO;
      this.beneficiary=response.beneficiary;
      this.customer=response.customer;
    })
  }
  
  message:any;
  // verifyName: string='';
  
  // beneficiaryInfo = null;

  // orderIssuer = {
  //   agentId: '123',
  //   wallet: 'wallet123',
  //   fullName: 'ghada ahl mbarek',
  //   emissionDate: '2023-01-01'
  // };

  // transferInfo = {
  //   amount: 100,
  //   beneficiaryFullName: 'krimis nizar',
  // };

  validatePayment(){
    // if(this.transferInfo.beneficiaryFullName.toLowerCase()===this.verifyName.toLowerCase()){
    //   this.message='Payement validated';
    // }else{
    //   this.message='Payement not validated';
    // }
    console.log({transferReference:this.transfer.transferReference,agentId:88,beneficiaryId:this.beneficiary.id})
    this.transferService.servieEspeceClientAgent({transferReference:this.transfer.transferReference,agentId:88,beneficiaryId:this.beneficiary.id}).subscribe((response:any)=>{
      this.message=response.msg;
    })
  }

}
