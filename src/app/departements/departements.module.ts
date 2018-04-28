import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDepartementComponent } from './create-departement/create-departement.component';
import {routes} from "./departements-routing.module";
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatIconModule,
  MatInputModule, MatNativeDateModule,
  MatSelectModule, MatTableModule
} from "@angular/material";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import { ListDepartementsComponent } from './list-departements/list-departements.component';
import { EditDepartementsComponent } from './edit-departements/edit-departements.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule,
    PerfectScrollbarModule,

  ],
  declarations: [CreateDepartementComponent, ListDepartementsComponent, EditDepartementsComponent]
})
export class DepartementsModule { }
