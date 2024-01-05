import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  clients = [
    { id: 1, name: 'Client 1', email: 'client1@example.com' },
    { id: 2, name: 'Client 2', email: 'client2@example.com' },
    // Add more clients as needed
  ];

  constructor(private router: Router) {}

  goToClientDetails(id: number): void {
    this.router.navigate(['/client', id]);
  }
}
