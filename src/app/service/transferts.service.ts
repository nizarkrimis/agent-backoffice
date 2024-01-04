import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransfertsService {
  private transfers: any[] = [
    { date: '2023-01-01', amount: 100, sender: 'John Doe', receiver: 'Alice Smith', type: 'Internal' },
    { date: '2023-02-15', amount: 150, sender: 'Bob Johnson', receiver: 'Charlie Brown', type: 'External' },
    { date: '2023-03-22', amount: 200, sender: 'Eva Davis', receiver: 'Frank Wilson', type: 'Internal' },
    // Add more static transfer data as needed
  ];

  getTransfers(): Observable<any[]> {
    return of(this.transfers);
  }
}
