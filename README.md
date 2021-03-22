
  
# Angular Twitch Login SDK
<a href="https://www.buymeacoffee.com/leifermendez" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

Integrate the Twitch login system into your amazing Angular project

<img src="https://badgen.net/npm/dy/twitch-login-sdk" /> <img src="https://badgen.net/npm/v/twitch-login-sdk" />  <img src="https://img.shields.io/github/stars/leifermendez/twitch-login-sdk" /> <img src="https://img.shields.io/github/license/leifermendez/twitch-login-sdk" />

---

[Live demo](https://twitch-login-sdk.stackblitz.io)

[Stackblitz](https://stackblitz.com/edit/twitch-login-sdk)

![](https://i.imgur.com/7UlkITH.png)

![](https://i.imgur.com/Nri25rj.png)

### Install
`npm i twitch-login-sdk@latest --save`

### Import


__app.module.ts__

```typescript
import {BrowserModule} from '@angular/platform-browser';  
import {NgModule} from '@angular/core';  
import {AppComponent} from './app.component';  
/** IMPORT **/
import  {TwitchLoginSdkModule} from "twitch-login-sdk"; 👈
  
@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    BrowserModule,   
	TwitchLoginSdkModule.forRoot({ 
		twitchId:  "xi7fl9ld6dlikhbv8xbfu77bzyjlkw", //<******* YOUR TWITCH_ID 👈
		redirect:  "https://twitch-sdk-login.stackblitz.io" //<***** YOUR CALLBACK REDIRECT 👈
	})
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule {  
}
```
__app.component.html__

__scopes:__ Default 
`user:read:email+openid+analytics:read:games+user:read:broadcast`

```html

<!-- Default -->
<twitch-login
(callback)="out($event)"
label="Login Twitch 🚀"
>
</twitch-login>

<!-- Pass scopes-->
<twitch-login
scopes="user:read:email+openid+analytics:read:games"
(callback)="out($event)"
label="Login Twitch 🚀">
</twitch-login>
```

### Use

Use in your component
```typescript
import  {Component,  OnInit}  from  '@angular/core'; 

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent implements  OnInit {  
	public outCb:  any;
	constructor(){}
	
	ngOnInit() {
	
	}

	/** Callback Data **/
	out($event): any   {
    	this.outCb = $event;
  	}
}
```

### Customize

__buttom-twitch-login__: Classname for button

![](https://i.imgur.com/7wguNoA.png)
