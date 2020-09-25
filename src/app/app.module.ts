import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { SidebarComponent } from './calculator/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/translations/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: environment.defaultLanguage,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    RouterModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
