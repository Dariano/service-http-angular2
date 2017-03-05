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
  providers: [HeroService, Hero],
  bootstrap: [AppComponent]
})
export class AppModule { }
