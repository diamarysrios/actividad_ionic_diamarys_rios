
# Proyecto IONIC Diamarys Rios V-20.589.352 
## Actividad II Información de Contacto IONIC - Diamarys Rios V-20.589.352 
### Sección 1 Trayecto III

En esta actividad actualizada en la pestaña de "Información de Contacto" con IONIC, luego de realizar las diversar validaciones, en la pestaña `tabs3`. Para esto se modificó el html de dicho componente para hacer uso de los formularios reactivos y así agregar las validaciones necesarias. La documentación completa y actualizada con esta actividad se encuentra en [este enlace](./Documentaci%C3%B3n.md))

### [tab3/tab3.page.html](/src/app/tab3/tab3.page.html)
```html
. . .

<form [formGroup]='form' (ngSubmit)="Enviar()">

    <ion-list>
      <ion-item 
        class="error"
        *ngIf="formControls['nombre'].errors?.['required'] && (formControls['nombre'].dirty || formControls['nombre'].touched)"
      >
        <ion-text  color="danger">El nombre es requerido.</ion-text>
      </ion-item>
      <ion-item>
        <ion-input label="Nombre"
        formControlName="nombre"
        type="text" 
        label-placement="floating" 
        fill="utline" 
        placeholder="Ingresar Nombre"></ion-input>
      </ion-item>

      <ion-item 
      class="error"
      *ngIf="formControls['telefono'].errors?.['required'] && (formControls['telefono'].dirty || formControls['telefono'].touched)"
    >
      <ion-text  color="danger">El teléfono es requerido.</ion-text> 
    </ion-item>
      <ion-item>
        <ion-input label="Teléfono" 
        formControlName="telefono"
        type="tel" 
        label-placement="floating"
        fill="utline" 
        placeholder="0000-888-8888"></ion-input>
      </ion-item>

      <ion-item 
      class="error"
      *ngIf="formControls['email'].errors?.['required'] && (formControls['email'].dirty || formControls['email'].touched)"
    >
      <ion-text  color="danger">El Email es requerido.</ion-text> 
    </ion-item>
      <ion-item>
        <ion-input label="Email" 
        formControlName="email"
        type="email"  
        label-placement="floating"
        fill="utline" 
        placeholder="email@domain.com"></ion-input>
      </ion-item>

      <ion-item 
      class="error"
      *ngIf="formControls['mensaje'].errors?.['required'] && (formControls['mensaje'].dirty || formControls['mensaje'].touched)"
    >
      <ion-text  color="danger">El Mensaje es requerido.</ion-text> 
    </ion-item>
      <ion-item>
        <ion-input label="Mensaje"
          formControlName="mensaje"
          type="text" 
          label-placement="floating"  
          fill="utline" 
          placeholder="Más Información">
        </ion-input>
      </ion-item>
    </ion-list>

    <ion-button type="submit" fill="outline">Enviar</ion-button>

</form>

. . .
```

### [tab3/module.ts](/src/app/tab3/tab3.module.ts)
Luego importé y registré los módulos FormsModule, ReactiveFormsModule

```ts
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Tab3PageRoutingModule
  ],
  
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
```

### [tab3/tab3.page.ts](/src/app/tab3/tab3.page.ts)
Luego implementé la validación de formulario reactivo en Ionic. Por lo tanto, actualicé el código en el archivo tab3.page.ts necesario para que el formulario sea validado y procesado. De momento como muestra se abre una ventana de alerta mostrando los elementos del formulario además de mostrar mensajes de log en la consola del navegador para demostrar que el formulario está funcionando pero de momento no está conectado a un backend.

```ts
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
```
