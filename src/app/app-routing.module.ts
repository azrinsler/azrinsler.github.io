import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToolComponent } from "./tool/tool.component";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: 'tool', component: ToolComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
