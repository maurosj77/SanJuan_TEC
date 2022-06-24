import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutasComponent } from './rutas/rutas.component';



@NgModule({
  declarations: [
    RutasComponent
  ],exports:[RutasComponent],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
