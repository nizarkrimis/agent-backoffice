import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer-service',
  templateUrl: './transfer-service.component.html',
  styleUrls: ['./transfer-service.component.css']
})
export class TransferServiceComponent {

  public reference: string='';
  public orderIssuer: any;
  public transferInfo: any;
  public beneficiaryInfo: any;
  public errorMessage: string='';

  public searchTransfer(): void {
    // Réinitialiser les données
    this.orderIssuer = null;
    this.transferInfo = null;
    this.beneficiaryInfo = null;
  
    // Simuler la récupération des données du transfert
    // Remplacez cela par un appel à un service ou une API dans une application réelle
    if (this.reference === '123456') {
      this.orderIssuer = {
        agentId: '123',
        wallet: 'wallet123',
        fullName: 'ghada ahl mbarek',
        emissionDate: '2023-01-01'
      };

      this.transferInfo = {
        amount: 100,
        beneficiaryFullName: 'krimis nizar',
      };

    } else {
      // Afficher un message d'erreur si la référence n'est pas trouvée
      this.errorMessage = 'Reference not found !';
    }
  }

  public message = '';
  public verifyName: string='';


  public validatePayment(): void {
    if(this.transferInfo.beneficiaryFullName.toLowerCase()===this.verifyName.toLowerCase()){
      this.message='Payement validated';
    }else{
      this.message='Payement not validated';
    }
  }

}
