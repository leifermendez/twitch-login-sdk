import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwitchSdkConfigService {
  twitchId = '';
  redirect = '';
  constructor() { }

  
}

export class UserService {
  private twitchId = 'NOT_ID';

  constructor(@Optional() config?: TwitchSdkConfigService) {
    if (config) { 
      console.log('hello')
      this.twitchId = config.twitchId;
     }
  }

  get userName() {
    // Demo: add a suffix if this service has been created more than once
    console.log('hello')
   return 'hello'
  }
}
