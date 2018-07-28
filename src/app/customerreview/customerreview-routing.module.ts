import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerReviewComponent } from './customer-review/customer-review.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerreviewRoutingModule { }
