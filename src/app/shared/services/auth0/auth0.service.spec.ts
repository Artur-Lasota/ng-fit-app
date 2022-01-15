/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Auth0Service } from './auth0.service';

describe('Service: Auth0', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth0Service]
    });
  });

  it('should ...', inject([Auth0Service], (service: Auth0Service) => {
    expect(service).toBeTruthy();
  }));
});
