import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';
import {RouterModule} from "@angular/router";
import {routes} from "./Matiere-routing.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ListMatiereComponent]
})
export class MatieresModule { }
