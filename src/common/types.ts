import {ReactNode} from 'react';

export type GenericProps = {
  key?: string,
  children?: ReactNode,
  className?: string
};
export type EducationHistory = {
  years: string,
  title: string,
  place: string,
  score: string
};
export type Data = {
  firstname: string,
  lastname: string,
  profession: string,
  email: string,
  location: string,
  education: EducationHistory[],
  skills: string[]
};
