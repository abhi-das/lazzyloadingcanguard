import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerdetailsRoutingModule } from './customerdetails-routing.module';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerdetailsRoutingModule
  ],
  declarations: [CustomerDetailComponent]
})
export class CustomerdetailsModule { }
