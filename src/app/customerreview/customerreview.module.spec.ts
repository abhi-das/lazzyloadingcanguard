import { CustomerreviewModule } from './customerreview.module';

describe('CustomerreviewModule', () => {
  let customerreviewModule: CustomerreviewModule;

  beforeEach(() => {
    customerreviewModule = new CustomerreviewModule();
  });

  it('should create an instance', () => {
    expect(customerreviewModule).toBeTruthy();
  });
});
