#  Frontend - Sistema de Gestión de Clientes

Aplicación web desarrollada con Angular para la gestión de clientes.
Este proyecto se conecta a una API (.NET) para realizar operaciones como agregar, editar, eliminar y consultar clientes.

---

---

##  Requisitos

Antes de comenzar, necesitas tener instalado:

* Node.js (versión 18 o superior)
* Angular CLI

 Verifica si ya los tienes:

```bash
node -v
npm -v
ng version
```

 Si no tienes Angular CLI:

```bash
npm install -g @angular/cli
```

---

##  Instalación paso a paso

### 1️ Clonar el repositorio

Abre una terminal y ejecuta:

```bash
git clone https://github.com/TU_USUARIO/TU_REPO_FRONT.git
```

---

### 2️Entrar a la carpeta del proyecto

```bash
cd TU_REPO_FRONT
```

---

### 3️Instalar dependencias

```bash
npm install
```

⏳ Esto puede tardar unos minutos.

---

## Ejecutar el proyecto

Ejecuta:

```bash
ng serve
```

Luego abre tu navegador en:

```
http://localhost:4200
```

---

##  IMPORTANTE (Backend)

 Este proyecto necesita que el backend esté funcionando.

Asegúrate de que tu API (.NET) esté corriendo en algo como:

```
https://localhost:7069
```

---

##  Configurar la URL del backend

Busca en tu proyecto (normalmente en `services`):

```ts
private apiUrl = 'https://localhost:7000/api/Cliente';
```
 Si cambias el puerto o lo subes a internet, debes actualizar esa URL.

---



```bash
```
