import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { EMAIL_SENDER } from './injection-tokens/injection-tokens';
import { MailerSendService } from './services/mailer-send.service';
import { HttpClientModule } from '@angular/common/http';

const mapConfig: YaConfig = {
  apikey: 'API_KEY',
  lang: 'ru_RU',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
