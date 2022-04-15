import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { counterReducer } from './store/counter.reducer';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { HeroComponent } from './components/hero/hero.component';
import { MockWebApi } from './mock-web-api';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockWebApi),
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument(),
    EntityDataModule.forRoot(entityConfig),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
