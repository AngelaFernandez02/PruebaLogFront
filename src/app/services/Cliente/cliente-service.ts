import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 export interface Cliente {
  idCliente: number;
  nombre: string;
  correoElectronico: string;
  telefono: string;
  estatus: boolean;
} 

@Injectable({
  providedIn: 'root',
})

export class ClienteService {
  

  private apiUrl = 'https://localhost:7069/api/Cliente';

  constructor(private http: HttpClient) {}

  //  Obtener clientes 
  obtenerClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ListaClientes`);
  }

  // Agregar cliente
  agregarCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/AgregarCliente`, cliente);
  }

  // Modificar cliente
  modificarCliente(cliente: Cliente): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/EditarCliente/${cliente.idCliente}`,
      cliente
    );
  }

  // Eliminar cliente (ajusta según tu API)
  eliminarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/EliminarCliente/${id}`);
  }
}