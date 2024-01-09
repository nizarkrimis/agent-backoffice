import { Component, OnInit } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { TransfertsService } from '../service/transferts.service';

@Component({
  selector: 'app-list-transferts',
  templateUrl: './list-transferts.component.html',
  styleUrls: ['./list-transferts.component.css']
})
export class ListTransfertsComponent implements OnInit {
  transfers: any[] = [
    { transerReference: 1, senderid: 123, receiverid: 456, type: 'Internal', amount: 100, state: 'served', date: '2023-01-01' },
    { transerReference: 2, senderid: 456, receiverid: 789, type: 'External', amount: 150, state: 'pending', date: '2023-02-15' },
    { transerReference: 3, senderid: 789, receiverid: 123, type: 'Internal', amount: 75, state: 'completed', date: '2023-03-10' },
    { transerReference: 4, senderid: 567, receiverid: 890, type: 'External', amount: 200, state: 'served', date: '2023-04-05' },
    { transerReference: 5, senderid: 890, receiverid: 123, type: 'Internal', amount: 120, state: 'pending', date: '2023-05-20' },
    // Add more static transfer data as needed
  ];

  filteredTransfers: any[] = [];
  searchInput: string = '';

  constructor(private transferService:TransfertsService) { 
    this.filteredTransfers = this.transfers;
  }
  ngOnInit(){
    this.transferService.getTransfers().subscribe((response:any)=>{
      console.log(response)
      this.transfers=response;
      this.filteredTransfers=response;
    })
  }

  searchTransfers(): void {
    this.filteredTransfers = this.transfers.filter(transfer =>
      Object.values(transfer).some(value => {
        if (typeof value === 'string' || typeof value === 'number') {
          const stringValue = String(value).toLowerCase();
          return stringValue.includes(this.searchInput.toLowerCase());
        }
        return false;
      })
    );
  }


}
