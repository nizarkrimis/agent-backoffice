import { Component, OnInit } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { TransfertsService } from '../service/transferts.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

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

  constructor(private transferService:TransfertsService,private toastr:ToastrService,private httpClient: HttpClient) { 
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

  extourneTransfer(transferReference:any){
    console.log(transferReference)
    let extourneRequest={transferReference:transferReference,agentId:99,motif:"Do Better"};
    this.transferService.extourneTransfer(extourneRequest).subscribe((response:any)=>{
      console.log(response)
      if(response.msg.includes("succés")){
        this.toastr.success(response.msg,"Toastr");
      }else{
        this.toastr.success(response.msg,"Toastr");
      }
    });
  }


  restituerTransfer(transferReference:any)
  {
    const headers = {
      'Content-Type': 'application/json'
    };
    const searchParams={
      transferReference:transferReference,
      operationType:"ESPECE_CONSOLE_AGENT",
      motif:"This is better"
    }

    const apiUrl = `http://localhost:8091/operation/restitution`;
    this.httpClient.post(apiUrl, searchParams,{headers}).subscribe(
      (response: any) => {
        console.log(response);
      },
      ); 
  }

}
