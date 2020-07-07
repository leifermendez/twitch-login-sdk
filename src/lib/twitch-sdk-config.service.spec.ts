import { TestBed } from '@angular/core/testing';

import { TwitchSdkConfigService } from './twitch-sdk-config.service';

describe('TwitchSdkConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitchSdkConfigService = TestBed.get(TwitchSdkConfigService);
    expect(service).toBeTruthy();
  });
});
