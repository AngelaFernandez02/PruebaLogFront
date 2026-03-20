import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/Cliente/cliente-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.html',
  styleUrls: ['./cliente.css'],
  changeDetection: ChangeDetectionStrategy.OnPush //  OPTIMIZACIÓN
})
export class Cliente {

  clientes: any[] = [];

  nuevoCliente = {
    idCliente: 0,
    nombre: '',
    correoElectronico: '',
    telefono: '',
    estatus: true
  };

  filtro: string = '';
  mostrarFormulario: boolean = false;
  modoEdicion: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private cdr: ChangeDetectorRef,
    private router:Router // 
  ) {
    this.obtenerClientes();
  }

cerrarSesion() {
  // Elimina datos de sesión
  localStorage.clear();
  sessionStorage.clear();

  // Redirige al login
  this.router.navigate(['/login']);
}

  // 🔹 Obtener clientes
  obtenerClientes() {
    this.clienteService.obtenerClientes().subscribe(data => {
      this.clientes = data;
      this.cdr.markForCheck(); 
    });
  }

  // 🔹 Guardar
  guardarCliente() {
    const request = this.modoEdicion
      ? this.clienteService.modificarCliente(this.nuevoCliente)
      : this.clienteService.agregarCliente(this.nuevoCliente);

    request.subscribe(() => {
      this.obtenerClientes();
      this.cerrarFormulario();
      this.cdr.markForCheck();
    });
  }

  // 🔹 Editar
  editarCliente(cliente: any) {
    this.nuevoCliente = { ...cliente };
    this.mostrarFormulario = true;
    this.modoEdicion = true;
    this.cdr.markForCheck();
  }

  // 🔹 Eliminar
  eliminarCliente(id: number) {
    this.clienteService.eliminarCliente(id)
      .subscribe(() => {
        this.obtenerClientes();
        this.cdr.markForCheck();
      });
  }

  // 🔹 Reset
  cerrarFormulario() {
    this.nuevoCliente = {
      idCliente: 0,
      nombre: '',
      correoElectronico: '',
      telefono: '',
      estatus: true
    };
    this.mostrarFormulario = false;
    this.modoEdicion = false;
    this.cdr.markForCheck();
  }

  // 🔹 Filtro optimizado
  clientesFiltrados() {
    const filtro = this.filtro.toLowerCase();
    return this.clientes.filter(c =>
      c.nombre?.toLowerCase().includes(filtro) ||
      c.correoElectronico?.toLowerCase().includes(filtro) ||
      c.telefono?.toLowerCase().includes(filtro)
    );
  }
}