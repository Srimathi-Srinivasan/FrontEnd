import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/Add-Property/Add-Property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyResolverService } from './services/property-resolver.service';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [
  {
    path: 'add-property',
    component: AddPropertyComponent
  },
  {
    path:"",
    component: PropertyListComponent
  },
  {
    path: 'rent-property',
    component: PropertyListComponent
  },
  {
    path: 'property-detail/:id',
    component: PropertyDetailComponent
    ,resolve:{prp:PropertyResolverService}
  },
  {
    path: 'user/login',
    component: UserLoginComponent
  },
  {
    path: 'user/register',
    component: UserRegisterComponent
  },
  {
    path: '**',
    component: PropertyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
