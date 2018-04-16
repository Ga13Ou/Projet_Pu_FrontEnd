import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import {AuthGuardService as AuthGuard} from "./DA/auth-guard.service";

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  canActivate:[AuthGuard],
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },{
    path: 'apps',
    loadChildren: './apps/apps.module#AppsModule'
  }, {
    path: 'widgets',
    loadChildren: './widgets/widgets.module#WidgetsModule'
  }, {
    path: 'user-manager',
    loadChildren: './user-manager/user-manager.module#UserManagerModule'
  }, {
    path: 'material',
    loadChildren: './material/material.module#MaterialComponentsModule'
  }, {
    path: 'ecommerce',
    loadChildren: './ecommerce/ecommerce.module#EcommerceModule'
  }, {
    path: 'taskboard',
    loadChildren: './taskboard/taskboard.module#TaskboardModule'
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormModule'
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  }, {
    path: 'charts',
    loadChildren: './chartlib/chartlib.module#ChartlibModule'
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapModule'
  }, {
    path: 'dragndrop',
    loadChildren: './dragndrop/dragndrop.module#DragndropModule'
  }, {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  },]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'session',
    loadChildren: './session/session.module#SessionModule'
  }, {
    path: 'user-manager',
    loadChildren: './user-manager/user-manager.module#UserManagerModule'
  } ,{
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}];

