import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routes} from './user-manager-routing.module';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule, MatSortModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import {HttpClientModule} from "@angular/common/http";
import {DialogUpdateUser, ListerUtilisateursComponent} from './lister-utilisateurs/lister-utilisateurs.component';
import {MatTableModule} from '@angular/material/table';
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";


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
    MatSortModule,
  ],
  declarations: [CreateComponent, AjoutEtudiantComponent, ListerUtilisateursComponent,DialogUpdateUser],
  providers: [],
  entryComponents: [
    DialogUpdateUser
  ]
})
export class UserManagerModule {

}
