import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchLoginSdkComponent } from './twitch-login-sdk.component';

describe('TwitchLoginSdkComponent', () => {
  let component: TwitchLoginSdkComponent;
  let fixture: ComponentFixture<TwitchLoginSdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchLoginSdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchLoginSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
