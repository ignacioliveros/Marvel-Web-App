import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros-list/heros.component';
import { HerosService } from './heros/hero-services/heros.service';
import { HeroDetailComponent } from './heros/hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [HerosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
