import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  form: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    mensaje: new FormControl('', [Validators.required])
  })

  ngOnInit() {

  }

  Enviar = () => {
    if (this.form.valid) {
      console.log("Formulario Enviado")
      console.log(this.form.value);
      alert(this.form.value.nombre+ "\n " + this.form.value.telefono+ "\n " +this.form.value.email+ "\n " +this.form.value.mensaje)
      return false;
    } else {
      return console.log('Valores requeridos');
    }
  }

  get formControls() { return this.form.controls; }

  constructor() { }

}