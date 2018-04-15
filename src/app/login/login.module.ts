import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import {RouterModule} from '@angular/router';
import {routesLogin} from './login-routing.module';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BackEndServiceService} from '../DA/back-end-service.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesLogin),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [LoginComponent],
  providers: [BackEndServiceService]
})
export class LoginModule { }
