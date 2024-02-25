/* ••[1]••••••••••••••••••••••••• formResume.type.ts •••••••••••••••••••••••••••••• */

export type ContactT = {
  name: string;
  title: string;
};

export type ProfileT = {
  description: string;
};

export type CapabilityT = {
  description: string;
  title: string;
};

export type SkillT = string;

export type EducationT = {
  institution: string;
  title: string;
};

export type CertificationT = {
  date: Date;
  institution: string;
  title: string;
};

export type ExperienceT = {
  company: string;
  endDate: Date;
  project: string;
  roleTitle: string;
  skills: Array<SkillT>;
  startDate: Date;
  technicalEnvironment: string;
};

export type ResumeFormT = {
  contact: ContactT;
  profile: ProfileT;
  capabilities: Array<CapabilityT>;
  skills: Array<SkillT>;
  educations: Array<EducationT>;
  certifications: Array<CertificationT>;
  experiences: Array<ExperienceT>;
};
