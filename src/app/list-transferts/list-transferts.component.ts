import { Component, OnInit  } from '@angular/core';
import { TransfertsService } from '../service/transferts.service';

@Component({
  selector: 'app-list-transferts',
  templateUrl: './list-transferts.component.html',
  styleUrls: ['./list-transferts.component.css']
})
export class ListTransfertsComponent implements OnInit {
  transfers: any[] = [
    { date: '2023-01-01', amount: 100, sender: 'John Doe', receiver: 'Alice Smith', type: 'Internal' },
    { date: '2023-02-15', amount: 150, sender: 'Bob Johnson', receiver: 'Charlie Brown', type: 'External' },
    { date: '2023-03-22', amount: 200, sender: 'Eva Davis', receiver: 'Frank Wilson', type: 'Internal' },
    // Add more static transfer data as needed
  ];

  constructor() {}

  ngOnInit(): void {}
  
}
