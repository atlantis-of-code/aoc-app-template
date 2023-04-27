import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AocUserConfig } from '@atlantis-of-code/aoc-client/aoc-common';
import { AocAppModule } from '@atlantis-of-code/aoc-client/components/aoc-app';
import { AocDirectivesModule } from '@atlantis-of-code/aoc-client/core/directives';
import { Config } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AocUser } from './models/users/aoc-user';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AocDirectivesModule,
    AocAppModule.forRoot(
      Config,
      new AocUserConfig(AocUser, { fieldMap: { username: 'username', password: 'pass' }}),
      {
        autoConvertEmptyStringsToNullInControls: true,
        autoTrimStringsInControls: true,
        dateTimePicker: {
          mode: 'dateTime',
          formats: {
            date: 'dd/MM/y',
            dateTime: 'dd/MM/y HH:mm:ss',
            time: 'HH:mm:ss'
          }
        }
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
