export interface Education
{
  started     : Date
  stopped    ?: Date

  school      : University

  major       : Degree
  minor      ?: Degree[]
}

export interface University
{
  name        : string
  location    : string
}

export interface Degree
{
  type        : DegreeType

  area        : string
  specialty  ?: string
  note       ?: string

  completed   : boolean

  gpa        ?: number
}

export enum DegreeType
{ BS = "Bachelor of Science", BA = "Bachelor of Arts" }

export const education : Education =
{
  started       : new Date(2014,  9),
  stopped       : new Date(2018, 12),
  school        :
  {
    name        : "University of Southern Maine",
    location    : "Portland, Maine"
  },
  major         :
    {
      type      : DegreeType.BS,
      area      : "Computer Science",
      note      : "cum laude",
      completed : true,
      gpa       : 3.67
    },
  minor         :
    [{
      type      : DegreeType.BA,
      area      : "Traditional Art",
      specialty : "Drawing & Painting",
      completed : false
    }],
}
