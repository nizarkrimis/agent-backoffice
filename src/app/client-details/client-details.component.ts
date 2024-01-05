import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  clientId!: number;
  client: any; // You can define a client model if needed

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = +params['id']; // '+' converts string to number
      // For simplicity, you can directly fetch the client from the static data
      this.client = this.clients.find(c => c.id === this.clientId);
    });
  }

  // Static client data (same as in client.component.ts)
  clients = [
    { id: 1, name: 'Client 1', email: 'client1@example.com' },
    { id: 2, name: 'Client 2', email: 'client2@example.com' },
    // Add more clients as needed
  ];

  // Add this method to navigate to national-transfer-multiple.component
  sendTransfer(): void {
    // Navigate to national-transfer-multiple.component and pass the client's name
    this.router.navigate(['/national-transfer-multiple', { name: this.client.name }]);
  }
}
