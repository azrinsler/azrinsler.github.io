import { Component } from '@angular/core'
import { skills }    from './resources/skills'

@Component ( {
  selector    :    'resume',
  templateUrl :  './resume.component.html',
  styleUrls   : ['./resume.component.css']
} )
export class ResumeComponent
{
  title  = "Resume for Azmo Rinsler"
  skills = skills
}
