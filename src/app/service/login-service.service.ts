import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private apiUrl = 'http://localhost:8888/AUTH-SERVICE/auth/authenticate';

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<any> {
    const body = { username, password };
    console.log("authenticate"+username+" "+password)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json', 
       // Add this line if needed
    });
    console.log(body);

    return this.http.post(this.apiUrl, body, { headers, responseType: 'text',withCredentials: true });
  }
}
