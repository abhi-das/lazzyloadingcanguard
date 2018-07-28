import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerbenefitsRoutingModule } from './customerbenefits-routing.module';
import { CustomerBenefitComponent } from './customer-benefit/customer-benefit.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerbenefitsRoutingModule
  ],
  declarations: [CustomerBenefitComponent]
})
export class CustomerbenefitsModule { }
