import { Component } from '@angular/core';

@Component({
  selector: 'app-create-national-transfer',
  templateUrl: './create-national-transfer.component.html',
  styleUrls: ['./create-national-transfer.component.css']
})
export class CreateNationalTransferComponent {
  sender: string = '';
  receiver: string = '';
  amount: number = 0;
  type: string = '';


  submitTransfer() {
    // Implement logic to handle the submission of the transfer
    console.log('Transfer submitted:', {
      sender: this.sender,
      receiver: this.receiver,
      amount: this.amount,
      type: this.type
    });


    }



    
    // You can implement further logic, e.g., send data to a service, etc.
  }


