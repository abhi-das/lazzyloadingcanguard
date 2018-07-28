import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBenefitComponent } from './customer-benefit.component';

describe('CustomerBenefitComponent', () => {
  let component: CustomerBenefitComponent;
  let fixture: ComponentFixture<CustomerBenefitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBenefitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
