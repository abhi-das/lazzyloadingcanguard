import { CustomerbenefitsModule } from './customerbenefits.module';

describe('CustomerbenefitsModule', () => {
  let customerbenefitsModule: CustomerbenefitsModule;

  beforeEach(() => {
    customerbenefitsModule = new CustomerbenefitsModule();
  });

  it('should create an instance', () => {
    expect(customerbenefitsModule).toBeTruthy();
  });
});
