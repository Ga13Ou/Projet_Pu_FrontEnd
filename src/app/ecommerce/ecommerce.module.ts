import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatSliderModule,
  MatCheckboxModule,
  MatSidenavModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EcommerceRoutes } from './ecommerce.routing';
import { ProductsComponent } from './products/products.component';
import { ProductsCompactComponent } from './products-compact/products-compact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EcommerceRoutes),
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [
  ProductsComponent,
  ProductsCompactComponent,
  ProductDetailComponent]
})

export class EcommerceModule {}
