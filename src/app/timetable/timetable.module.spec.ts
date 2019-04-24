import { TimetableModule } from './timetable.module';

describe('TimetableModule', () => {
  let timetableModule: TimetableModule;

  beforeEach(() => {
    timetableModule = new TimetableModule();
  });

  it('should create an instance', () => {
    expect(timetableModule).toBeTruthy();
  });
});
