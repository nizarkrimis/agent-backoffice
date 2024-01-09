import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-national-transfer-multiple',
  templateUrl: './national-transfer-multiple.component.html',
  styleUrls: ['./national-transfer-multiple.component.css']
})
export class NationalTransferMultipleComponent {
  senderName: string = '';
  amount: number = 0;
  type: string = '';
  receiverList=[]; // Initial receiver options
  selectedReceiver: string = '';
  addedReceiver: string = "";
  sender:any;
  operationType:string="";

  constructor(private route: ActivatedRoute,private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    // Get the sender's name from route parameters
    this.route.params.subscribe(params => {
      this.senderName = params['firstName'];
      this.sender=params;
    });

    const apiUrl = `http://localhost:8092/beneficiaries/beneficiaries-customer/${this.sender['customerId']}`;
    this.httpClient.get(apiUrl).subscribe(
   (response: any) => {
    console.log(response);
     this.receiverList = response;
     
   },
   );


  }

  submitTransfer() {
    // Implement logic to handle the submission of the transfer to multiple receivers
    console.log('Transfer submitted to multiple receivers:', {
      sender: this.senderName, // Use the senderName obtained from route params
      amount: this.amount,
      type: this.type,
      receivers: this.addedReceiver
    });
    // You can implement further logic, e.g., send data to a service, etc.

    const searchParams = {
      "operationBody":{
          "transferType":"EMISSION",
          "operationType":this.operationType
      },
      "transferBody":{
          "senderId":Number(this.sender['customerId']),
          "receiverId":this.addedReceiver,
          "amount":this.amount
      },
      "fraisType":this.type
    };
    const headers = {
      'Content-Type': 'application/json'
    };
    console.log(searchParams);

    const apiUrl = `http://localhost:8091/operation/emission`;
    this.httpClient.post(apiUrl, searchParams,{headers}).subscribe(
      (response: any) => {
        
        this.router.navigate(['/otp-verification', response['transferRef']]);
      },
      );
  }

  addReceiver() {
    // Add the selected receiver to the list of added receivers
    if (this.selectedReceiver && !this.addedReceiver.includes(this.selectedReceiver)) {
      this.addedReceiver=this.selectedReceiver;
    }
  }
}
