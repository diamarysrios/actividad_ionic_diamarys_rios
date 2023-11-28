import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '', //path: es una cadena que coincide con la URL en la barra de direcciones del navegador.
    component: Tab1Page, //el componente que el enrutador debe crear al navegar a esta ruta.
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
