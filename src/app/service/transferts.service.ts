import { HttpClient , HttpHeaders} from '@angular/common/http';
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

  constructor(private httpClient : HttpClient){}

  url="http://localhost:8091/transfers/";
  urlServie="http://localhost:8091/servir/";
  headers=new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  })

  getTransfers(): Observable<Object> {
    return this.httpClient.get(this.url+"all");
  }

  getTransferByRef(reference:string):Observable<Object>{
    return this.httpClient.get(this.url+reference);
  }

  servieEspeceClientAgent(servirBody:any):Observable<Object>{
    return this.httpClient.post(this.urlServie+"espece-console",servirBody,{headers : this.headers});
  }
}
