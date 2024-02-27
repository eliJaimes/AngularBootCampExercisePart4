/* ••[1]••••••••••••••••••••••••• resume-form.type.ts •••••••••••••••••••••••••••••• */

import {
  CapabilityT,
  CertificationT,
  ContactT,
  EducationT,
  ExperienceT,
  ProfileT,
  SkillT,
} from '../../entities/resumeForm.type';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type ContactFormGroupT = FormGroup<{
  name: FormControl<ContactT['name']>;
  title: FormControl<ContactT['title']>;
}>;

export type ProfileFormGroupT = FormGroup<{
  description: FormControl<ProfileT['description']>;
}>;

export type CapabilityFormGroupT = FormGroup<{
  description: FormControl<CapabilityT['description']>;
  title: FormControl<CapabilityT['title']>;
}>;

export type SkillFormControlT = FormControl<SkillT>;

export type EducationFormGroupT = FormGroup<{
  institution: FormControl<EducationT['institution']>;
  title: FormControl<EducationT['title']>;
}>;

export type CertificationFormGroupT = FormGroup<{
  date: FormControl<CertificationT['date']>;
  institution: FormControl<CertificationT['institution']>;
  title: FormControl<CertificationT['title']>;
}>;

export type ExperienceFormGroupT = FormGroup<{
  company: FormControl<ExperienceT['company']>;
  endDate: FormControl<ExperienceT['endDate']>;
  project: FormControl<ExperienceT['project']>;
  roleTitle: FormControl<ExperienceT['roleTitle']>;
  skills: FormArray<SkillFormControlT>;
  startDate: FormControl<ExperienceT['startDate']>;
  technicalEnvironment: FormControl<ExperienceT['technicalEnvironment']>;
}>;

export type ResumeFormGroupT = FormGroup<{
  contact: ContactFormGroupT;
  profile: ProfileFormGroupT;
  capabilities: FormArray<CapabilityFormGroupT>;
  skills: FormArray<SkillFormControlT>;
  educations: FormArray<EducationFormGroupT>;
  certifications: FormArray<CertificationFormGroupT>;
  experiences: FormArray<ExperienceFormGroupT>;
}>;
