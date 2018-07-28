import { CustomerdetailsModule } from './customerdetails.module';

describe('CustomerdetailsModule', () => {
  let customerdetailsModule: CustomerdetailsModule;

  beforeEach(() => {
    customerdetailsModule = new CustomerdetailsModule();
  });

  it('should create an instance', () => {
    expect(customerdetailsModule).toBeTruthy();
  });
});
