import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TwitchSdkConfigService } from './twitch-sdk-config.service';

@Component({
  selector: 'twitch-login',
  template: `
    <style>
    .buttom-twitch-login{
      cursor:pointer;
      padding: 10px;
      border: 0;
      background-color: #6441a5;
      color: white;
      font-size: 1rem;
      border-radius: 5px;
      box-shadow: 0 0 10px #b194e6;
      line-height: 1rem;
    }
    </style>
    <button class="buttom-twitch-login" 
    [disabled]="loading"
    [style.opacity]="(loading) ? '.6':'1'"
    (click)="openLogin()" type="button">
    {{this.label}}
    </button>
  `,
  styles: []
})
export class TwitchLoginSdkComponent implements OnInit {
  @Output() callback = new EventEmitter<Object>();
  @Input() label: string = 'Login Twitch';
  @Input() scopes: string = 'user:read:email+openid+analytics:read:games+user:read:broadcast';
  public win: any = {};
  public loading = false;
  public endPoint = null;
  constructor(private configService: TwitchSdkConfigService) { }

  ngOnInit() {

  }

  private closeTwitch = () => {
    this.loading = false;
    this.win.close();
  }

  private openWinTwitch = (idToken = null, redirect = null, scope = this.scopes) => new Promise((resolve, reject) => {
    try {
      this.loading = true;
      this.endPoint = `https://id.twitch.tv/oauth2/authorize?client_id=${idToken}&redirect_uri=${redirect}&response_type=token%20id_token&scope=${scope}`
      let strWindowFeatures = "location=yes,height=620,width=520,scrollbars=no,resizable=no,status=yes";
      this.win = window.open(this.endPoint,
        'twitchLoginNav',
        strWindowFeatures
      );

      const intervalHash = setInterval(() => {
        try {
          const response_token = this.win['location'].hash;
          if (response_token) {
            const token = response_token.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]
            var req = new XMLHttpRequest();
            req.open('GET', 'https://api.twitch.tv/helix/users?scope=user:read:email', false);
            req.setRequestHeader('Authorization', 'Bearer ' + token);
            req.setRequestHeader('Client-ID', idToken);
            req.send(null);
            if (req.status == 200) {
              if (req.response && JSON.parse(req.response)) {
                clearInterval(intervalHash)
                const _response = JSON.parse(req.response);
                let _data = (_response['data'][0]) ? _response['data'][0] : {};
                _data['token'] = token
                this.closeTwitch()
                resolve(_data)
              }
            } else if (req.status == 401) {
              console.log(`Error ${req.status}`)
              clearInterval(intervalHash)
            }
          } else {
            if (this.win['location']['href'].includes('error')) {
              clearInterval(intervalHash)
              this.closeTwitch()
              reject({
                message: `Error, check your configuration: CLIENT ID, REDIRECT_URL`
              })
            }
          }
        } catch (e) {
          this.loading = false;
          return null;
        }
      }, 100);

    } catch (e) {
      this.loading = false;
      reject(e)
    }
  })


  openLogin = () => {
    try {
      const { twitchId, redirect } = this.configService;
      this.openWinTwitch(twitchId, redirect).then(response => {
        this.callback.emit(response)
      }).catch(err => {
        this.callback.emit(err)
      })
    } catch (e) {
      console.error(e)
    }
  }
}
