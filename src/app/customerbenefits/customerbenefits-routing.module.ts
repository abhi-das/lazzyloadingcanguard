import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerBenefitComponent } from './customer-benefit/customer-benefit.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerBenefitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerbenefitsRoutingModule { }
