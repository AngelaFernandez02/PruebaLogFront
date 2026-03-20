import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
   private apiUrl = 'https://localhost:7069/api/Usuario';

  constructor(private http: HttpClient) {}

  login(usuario: string, contrasena: string): Observable<any> {

    const body = {
      usuario: usuario,
      contrasenia: contrasena
    };
    return this.http.post(`${this.apiUrl}/Login`, body);
  }
  
}
