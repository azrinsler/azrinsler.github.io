import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularTemplate } from "./angular-template/angular-template.component";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  { path: '', component: AngularTemplate },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
