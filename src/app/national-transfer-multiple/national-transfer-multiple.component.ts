import { Component } from '@angular/core';

@Component({
  selector: 'app-national-transfer-multiple',
  templateUrl: './national-transfer-multiple.component.html',
  styleUrls: ['./national-transfer-multiple.component.css']
})
export class NationalTransferMultipleComponent {
  sender: string = '';
  amount: number = 0;
  type: string = '';
  receiverList: string[] = ['receiver1', 'receiver2']; // Initial receiver options
  selectedReceiver: string = '';
  addedReceivers: string[] = [];

  submitTransfer() {
    // Implement logic to handle the submission of the transfer to multiple receivers
    console.log('Transfer submitted to multiple receivers:', {
      sender: this.sender,
      amount: this.amount,
      type: this.type,
      receivers: this.addedReceivers
    });
    // You can implement further logic, e.g., send data to a service, etc.
  }

  addReceiver() {
    // Add the selected receiver to the list of added receivers
    if (this.selectedReceiver && !this.addedReceivers.includes(this.selectedReceiver)) {
      this.addedReceivers.push(this.selectedReceiver);
    }
  }
}
