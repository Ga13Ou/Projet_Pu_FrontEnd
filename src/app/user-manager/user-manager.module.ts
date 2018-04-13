import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routes} from './user-manager-routing.module';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EtudiantRegisterComponent } from './etudiant-register/etudiant-register.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateComponent, EtudiantRegisterComponent]
})
export class UserManagerModule {

}
