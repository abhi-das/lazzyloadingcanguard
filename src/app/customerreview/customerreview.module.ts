import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerreviewRoutingModule } from './customerreview-routing.module';
import { CustomerReviewComponent } from './customer-review/customer-review.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerreviewRoutingModule
  ],
  declarations: [CustomerReviewComponent]
})
export class CustomerreviewModule { }
