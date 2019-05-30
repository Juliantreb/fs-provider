import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RentalDetails1Page } from './rental-details1.page';

const routes: Routes = [
  {
    path: '',
    component: RentalDetails1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RentalDetails1Page]
})
export class RentalDetails1PageModule {}
