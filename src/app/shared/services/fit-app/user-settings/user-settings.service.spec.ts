/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserSettingsService } from './user-settings.service';

describe('Service: UserSettings', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSettingsService]
    });
  });

  it('should ...', inject([UserSettingsService], (service: UserSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
