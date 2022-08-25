import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";

import { ToolComponent } from "./tool/tool.component";
import { ResumeComponent } from "./resume/resume.component";

@NgModule({
  declarations: [
    AppComponent,
    ToolComponent,
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
