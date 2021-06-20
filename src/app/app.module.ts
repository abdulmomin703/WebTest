import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdsenseModule } from 'ng2-adsense';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { ReactiveFormsModule } from '@angular/forms';

const google_CLIENT_ID =
  '554619237061-2j2m9uhnufa8gl0qon5oqohq83lgjqsr.apps.googleusercontent.com';
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    AdsenseModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    SocialLoginModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(google_CLIENT_ID),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('518606282598642'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
