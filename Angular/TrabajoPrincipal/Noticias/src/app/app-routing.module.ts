
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './components/layout/layout.module';


const routes: Routes = [];



@NgModule({
  imports: [RouterModule.forRoot(routes),LayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
