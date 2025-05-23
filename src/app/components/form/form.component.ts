import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  send: FormGroup;

  constructor(private sendBuiler: FormBuilder) {
    this.send = this.sendBuiler.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      ciudad: ['', [Validators.required]],
      ocupacion: ['', [Validators.required]],
      salario: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    console.log(this.send.value);
    this.send.reset();
  }
}
