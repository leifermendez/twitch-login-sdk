import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { TwitchLoginSdkComponent } from './twitch-login-sdk.component';
import { TwitchSdkConfigService } from './twitch-sdk-config.service';



@NgModule({
  declarations: [TwitchLoginSdkComponent],
  imports: [
  ],
  exports: [TwitchLoginSdkComponent]
})


export class TwitchLoginSdkModule { 
  constructor (@Optional() @SkipSelf() parentModule?: TwitchLoginSdkModule) {
    if (parentModule) {
      throw new Error(
        'GreetingModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: TwitchSdkConfigService): ModuleWithProviders<TwitchLoginSdkModule> {
    return {
      ngModule: TwitchLoginSdkModule,
      providers: [
        {provide: TwitchSdkConfigService, useValue: config }
      ]
    };
  }

}



