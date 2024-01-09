import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:8092/agents'; 

  constructor(private http: HttpClient) { }

// Include the token in the header
private getHeaders(): HttpHeaders {
  const token = localStorage.getItem('token'); // call the stored token in local storage
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
}

getProfileData(email: string): Observable<any> {
  const url = `${this.apiUrl}/email/${email}`;
  
  // Use headers with the token
  const headers = this.getHeaders();

  return this.http.get(url, { headers });
}
}
