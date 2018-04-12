import { Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductsCompactComponent } from './products-compact/products-compact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const EcommerceRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'products',
      component: ProductsComponent
    }, {
      path: 'compact',
      component: ProductsCompactComponent
    }, {
      path: 'detail',
      component: ProductDetailComponent
    }]
  }
];
