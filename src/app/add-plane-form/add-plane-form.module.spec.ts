import { AddPlaneFormModule } from './add-plane-form.module';

describe('AddPlaneFormModule', () => {
  let addPlaneFormModule: AddPlaneFormModule;

  beforeEach(() => {
    addPlaneFormModule = new AddPlaneFormModule();
  });

  it('should create an instance', () => {
    expect(addPlaneFormModule).toBeTruthy();
  });
});
