import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Cliente} from './components/cliente/cliente';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },

  { path: 'clientes', component: Cliente },

  { path: '**', redirectTo: 'login' }
];