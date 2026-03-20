import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/Login/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  usuario = {
    usuario: '',
    contrasenia: ''
  };

  error: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  login() {

    if (!this.usuario.usuario || !this.usuario.contrasenia) {
      this.error = 'Todos los campos son obligatorios';
      return;
    }

    this.loginService.login(
      this.usuario.usuario,
      this.usuario.contrasenia
    ).subscribe({
      next: (res) => {
        console.log('Respuesta API:', res);

        // Guardar usuario
        localStorage.setItem('usuario', JSON.stringify(res.usuario));

        this.error = '';

        console.log('Redirigiendo a clientes...');
        this.router.navigate(['/clientes']);
      },
      error: (err) => {
        console.error(err);
        this.error = 'Usuario o contraseña incorrectos';
      }
    });
  }
}