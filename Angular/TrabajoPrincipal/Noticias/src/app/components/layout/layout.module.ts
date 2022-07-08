import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAVComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    NAVComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    CommonModule
  ],exports:[NAVComponent,FooterComponent,BodyComponent]
})
export class LayoutModule { }
