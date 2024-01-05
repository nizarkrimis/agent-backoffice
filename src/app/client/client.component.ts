import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  clients = [
    { id: 1, firstname: "Client", lastname: '1', cne: 'EE995566', email: 'client1@example.com', phone: "0600000001", balance: 1500, accountType: "Normale" },
    { id: 2, firstname: "Client", lastname: '2', cne: 'EE995567', email: 'client2@example.com', phone: "0600000002", balance: 2000, accountType: "Normale" },
    { id: 3, firstname: "Client", lastname: '3', cne: 'EE995568', email: 'client3@example.com', phone: "0600000003", balance: 1200, accountType: "Normale" },
    { id: 4, firstname: "Client", lastname: '4', cne: 'EE995569', email: 'client4@example.com', phone: "0600000004", balance: 1800, accountType: "Normale" },
    { id: 5, firstname: "Client", lastname: '5', cne: 'EE995570', email: 'client5@example.com', phone: "0600000005", balance: 2500, accountType: "Normale" },
  ];
  

  constructor(private router: Router) {}

  goToClientDetails(id: number): void {
    this.router.navigate(['/client', id]);
  }
}
