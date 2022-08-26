import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";

import { AngularTemplate } from "./angular-template/angular-template.component";
import { ResumeComponent } from "./resume/resume.component";

@NgModule({
  declarations: [
    AppComponent,
    AngularTemplate,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
