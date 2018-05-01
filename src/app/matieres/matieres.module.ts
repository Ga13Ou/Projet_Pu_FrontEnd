import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';
import {RouterModule} from "@angular/router";
import {routes} from "./Matiere-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatIconModule,
  MatInputModule, MatListModule,
  MatNativeDateModule,
  MatSelectModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import { CreateMatiereComponent } from './create-matiere/create-matiere.component';
import { EditMatiereComponent } from './edit-matiere/edit-matiere.component';
import { MatiereFiliereComponent } from './matiere-filiere/matiere-filiere.component';
import {DragulaModule} from "ng2-dragula";

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
    DragulaModule,
      MatListModule,
  ],
  declarations: [ListMatiereComponent, CreateMatiereComponent, EditMatiereComponent, MatiereFiliereComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MatieresModule { }
