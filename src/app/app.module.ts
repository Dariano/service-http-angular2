import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { HeroService } from './hero/hero.service';
import { Hero } from './hero/hero';
import { HeroData } from './hero/hero-data';
import { Http, RequestOptions } from '@angular/http';

// import { requestOptionsProvider } from './default-request-options.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ')
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    // InMemoryWebApiModule.forRoot(HeroData)
  ],
  providers: [
    HeroService,
    Hero,
    // requestOptionsProvider
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
