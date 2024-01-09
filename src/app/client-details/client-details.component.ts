import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  clientId!: number;
  client: any; // You can define a client model if needed

  constructor(private route: ActivatedRoute, private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = +params['id']; // '+' converts string to number
      // For simplicity, you can directly fetch the client from the static data
      const apiUrl = `http://localhost:8092/customers/${this.clientId}`;
      this.httpClient.get(apiUrl).subscribe(
     (response: any) => {
       console.log(response)
       this.client=response;
       
     },
     );
    });
  }

  // Static client data (same as in client.component.ts)
  clients = [
    { id: 1, firstname: "Client", lastname: '1', cne: 'EE995566', email: 'client1@example.com', phone: "0600000001", balance: 1500, accountType: "Normale" },
    { id: 2, firstname: "Client", lastname: '2', cne: 'EE995567', email: 'client2@example.com', phone: "0600000002", balance: 2000, accountType: "Normale" },
    // Add more clients as needed
  ];

  // Add this method to navigate to national-transfer-multiple.component
  sendTransfer(): void {
    if (this.client) {
      const clientName = `${this.client.firstName} ${this.client.lastName}`;
      // Navigate to national-transfer-multiple.component and pass the client's name
      this.router.navigate(['/national-transfer-multiple', this.client]);
    }
  }
}
