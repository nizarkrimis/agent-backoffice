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
  public verifyName: string='';

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
      this.errorMessage = 'Reference not found';
    }
  }

  public validatePayment(): void {
    // Simuler la validation du paiement du transfert
    // Mettre à jour le solde de l'agent (simulé ici)
    // Mettre à jour l'état du transfert à "payé"
    // Générer un reçu de paiement (simulé ici)
    // Vous devrez également mettre en œuvre la génération du CRE fin de journée, la mise à jour
    // de l'état du transfert à "payé", et l'édition du reçu de paiement.
    // Simuler la validation du paiement du transfert
    // Vous pouvez obtenir le montant à partir des données du transfert    
  }

}
