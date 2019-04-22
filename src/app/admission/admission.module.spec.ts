import { AdmissionModule } from './admission.module';

describe('AdmissionModule', () => {
  let admissionModule: AdmissionModule;

  beforeEach(() => {
    admissionModule = new AdmissionModule();
  });

  it('should create an instance', () => {
    expect(admissionModule).toBeTruthy();
  });
});
