import { TestBed } from '@angular/core/testing';

import { TwitchLoginSdkService } from './twitch-login-sdk.service';

describe('TwitchLoginSdkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitchLoginSdkService = TestBed.get(TwitchLoginSdkService);
    expect(service).toBeTruthy();
  });
});
