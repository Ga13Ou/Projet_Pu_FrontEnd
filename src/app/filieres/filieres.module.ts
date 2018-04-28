import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListFilieresComponent} from './list-filieres/list-filieres.component';
import {RouterModule} from '@angular/router';
import {routes} from './filiere-routing.module';
import {MatTableModule} from '@angular/material/table';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import {CreateFiliereComponent} from './create-filiere/create-filiere.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {EditFiliereComponent} from './edit-filiere/edit-filiere.component';

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
  declarations: [ListFilieresComponent,CreateFiliereComponent,EditFiliereComponent]
})
export class FilieresModule { }
