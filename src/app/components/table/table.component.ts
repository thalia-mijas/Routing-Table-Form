import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

interface User {
  id: number;
  nombre: string;
  edad: number;
  ciudad: string;
  ocupacion: string;
  salario: number;
  estado: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgStyle, NgFor, NgIf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  users: User[];

  headerStyle = {
    color: 'black',
    fontSize: '20px',
  };

  mostrarEdad = true;
  mostrarCiudad = true;
  mostrarOcupacion = false;
  mostrarSalario = false;

  constructor() {
    this.users = [
      {
        id: 1,
        nombre: 'Juan Pérez',
        edad: 28,
        ciudad: 'Quito',
        ocupacion: 'Ingeniero',
        salario: 2500,
        estado: 'Activo',
      },
      {
        id: 2,
        nombre: 'Maria Gómez',
        edad: 34,
        ciudad: 'Guayaquil',
        ocupacion: 'Diseñadora',
        salario: 2800,
        estado: 'Inactivo',
      },
      {
        id: 3,
        nombre: 'Carlos Torres',
        edad: 45,
        ciudad: 'Cuenca',
        ocupacion: 'Arquitecto',
        salario: 3500,
        estado: 'Activo',
      },
      {
        id: 4,
        nombre: 'Ana López',
        edad: 30,
        ciudad: 'Loja',
        ocupacion: 'Docente',
        salario: 2200,
        estado: 'Activo',
      },
      {
        id: 5,
        nombre: 'Diego Rivera',
        edad: 29,
        ciudad: 'Ambato',
        ocupacion: 'Desarrollador',
        salario: 3000,
        estado: 'Inactivo',
      },
      {
        id: 6,
        nombre: 'Laura Castro',
        edad: 37,
        ciudad: 'Manta',
        ocupacion: 'Administradora',
        salario: 3100,
        estado: 'Activo',
      },
      {
        id: 7,
        nombre: 'Luis Andrade',
        edad: 41,
        ciudad: 'Machala',
        ocupacion: 'Contador',
        salario: 2700,
        estado: 'Activo',
      },
      {
        id: 8,
        nombre: 'Patricia Suárez',
        edad: 33,
        ciudad: 'Esmeraldas',
        ocupacion: 'Psicóloga',
        salario: 2400,
        estado: 'Inactivo',
      },
      {
        id: 9,
        nombre: 'Fernando Rojas',
        edad: 26,
        ciudad: 'Riobamba',
        ocupacion: 'Mecánico',
        salario: 2300,
        estado: 'Activo',
      },
      {
        id: 10,
        nombre: 'Gabriela León',
        edad: 39,
        ciudad: 'Ibarra',
        ocupacion: 'Abogada',
        salario: 3200,
        estado: 'Activo',
      },
      {
        id: 11,
        nombre: 'Miguel Vázquez',
        edad: 42,
        ciudad: 'Latacunga',
        ocupacion: 'Chef',
        salario: 2600,
        estado: 'Inactivo',
      },
      {
        id: 12,
        nombre: 'Andrea Paredes',
        edad: 31,
        ciudad: 'Tulcán',
        ocupacion: 'Periodista',
        salario: 2800,
        estado: 'Activo',
      },
      {
        id: 13,
        nombre: 'Roberto Silva',
        edad: 38,
        ciudad: 'Portoviejo',
        ocupacion: 'Médico',
        salario: 3500,
        estado: 'Activo',
      },
      {
        id: 14,
        nombre: 'Monica Estrella',
        edad: 29,
        ciudad: 'Santa Elena',
        ocupacion: 'Enfermera',
        salario: 2500,
        estado: 'Activo',
      },
      {
        id: 15,
        nombre: 'José Ochoa',
        edad: 44,
        ciudad: 'Puyo',
        ocupacion: 'Técnico',
        salario: 2400,
        estado: 'Inactivo',
      },
    ];
  }

  cambiarEstilo() {
    if (this.headerStyle.color === 'black') {
      this.headerStyle.color = 'white';
    } else {
      this.headerStyle.color = 'black';
    }
    if (this.headerStyle.fontSize === '20px') {
      this.headerStyle.fontSize = '24px';
    } else {
      this.headerStyle.fontSize = '20px';
    }
    this.mostrarEdad = !this.mostrarEdad;
    this.mostrarCiudad = !this.mostrarCiudad;
    this.mostrarOcupacion = !this.mostrarOcupacion;
    this.mostrarSalario = !this.mostrarSalario;
  }
}
