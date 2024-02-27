/* ••[1]••••••••••••••••••••••••• resume-form.data.ts •••••••••••••••••••••••••••••• */

import {
  CapabilityT,
  CertificationT,
  ContactT,
  EducationT,
  ExperienceT,
  ProfileT,
  SkillT,
} from '../../entities/resumeForm.type';

export const CONTACT: ContactT = {
  name: 'Eli Jaimes',
  title: 'Practice Manager',
};

export const PROFILE: ProfileT = {
  description:
    'I am a Computer Engineer who combines creativity and logic to design and develop user experiences (UX), knowledge-based programming, software architecture, organization, and project implementation. I am constantly seeking new skills and knowledge to enhance my expertise.',
};

export const CAPABILITIES: Array<CapabilityT> = [
  {
    description:
      'Design and develop software that offers users with significant and appropriate experiences',
    title: 'User Experiences',
  },
  {
    description:
      'Ensure scalability, security, reusability, extensibility, modularity, and maintainability while meeting business requirements.',
    title: 'Software Architecture',
  },
  {
    description:
      'I have had the chance to oversee various projects from the planning stage to execution and implementation.',
    title: 'Project Implementation',
  },
];

export const SKILLS: Array<SkillT> = [
  'AJAX',
  'Angular',
  'CSS',
  'Firebase',
  'FireStore',
  'JavaScript',
  'JSON',
  'LESS',
  'Lit',
  'NestJS',
  'Node.js',
  'REST',
  'RxJs',
  'Sass',
  'SOAP',
  'TailwindCSS',
  'Typescript',
  'Vue.js',
  'XHTML',
  'XML',
];

export const EDUCATIONS: Array<EducationT> = [
  {
    institution: '2009 - 10 • Graduate in Business Management',
    title:
      'IL3, Instituto de Formación Continua - Universitat de Barcelona. (http://www.il3.ub.edu)',
  },
  {
    institution: '2000 - 05 • Degree in Bachelor of Computer Engineering',
    title:
      'Universidad Tecnológica de la Mixteca (U.T.M.). (http://www.utm.mx)',
  },
  {
    institution: '2005 • Performance Satisfactory Testimony',
    title:
      'Informática - Computación, Perfil "D", Centro Nacional Evaluación de Educación Superior (CENEVAL). (http://www.ceneval.edu.mx)',
  },
];

export const CERTIFICATIONS: Array<CertificationT> = [
  {
    date: new Date('01,01,2021'),
    institution: '2021 • Certified Node.js Application Developer',
    title: 'The Linux Foundation. (https://linuxfoundation.org)',
  },
  {
    date: new Date('01,01,2017'),
    institution:
      '2017 • MCD - API Design Associate, MCD - Integration and API Associate',
    title: 'MuleSoft Certified Developer. (https://www.mulesoft.com)',
  },
  {
    date: new Date('01,01,2013'),
    institution: '2013 • SEI-Certified PSP Developer (Certificate # 1732883)',
    title:
      'SEI Certification | Carnegie Mellon University. (http://www.cmu.edu)',
  },
];

export const EXPERIENCES: Array<ExperienceT> = [
  {
    company: 'Apex Systems',
    endDate: new Date(),
    project:
      'As a contractor for Oxy, a petroleum company, I led the development of the Oxy Royalty platform. The platform is a single-page application that provides reports to both internal and external users. These reports are generated from SQL, SSRS, and HANA views, and the platform is built using Angular',
    roleTitle: 'Practice Manager',
    skills: [
      'Angular',
      'CSS',
      'JavaScript',
      'JSON',
      'RxJs',
      'Sass',
      'Typescript',
      'XHTML',
      'XML',
    ],
    startDate: new Date('10/01/2022'),
    technicalEnvironment: 'Angular v15, Angular Material, RxJs, Typescript',
  },
  {
    company: 'Apex Systems',
    endDate: new Date('08/01/2021'),
    project:
      "While working as a contractor for BP, I contributed to the development and improvement of DBaaS Management Console. This Angular-based Single Page Application is responsible for monitoring and managing BP's databases across the globe",
    roleTitle: 'Lead Consultant',
    skills: [
      'Angular',
      'CSS',
      'JavaScript',
      'JSON',
      'RxJs',
      'Sass',
      'Typescript',
      'XHTML',
      'XML',
    ],
    startDate: new Date('01/01/2022'),
    technicalEnvironment: 'Angular v13, NgRx, RxJs, Typescript',
  },
  {
    company: 'Oracle',
    endDate: new Date('08/01/2021'),
    project:
      "Cloud Customer Connect is Oracle's premier online cloud community — specifically designed to promote peer-to-peer collaboration and sharing of best practices, enable members to keep pace with product strategy, and provide a cloud solution feedback channel directly to Oracle development.",
    roleTitle: 'Applications Engineer',
    skills: [
      'AJAX',
      'CSS',
      'JavaScript',
      'JSON',
      'LESS',
      'Node.js',
      'REST',
      'Sass',
      'SOAP',
      'Typescript',
      'XHTML',
      'XML',
    ],
    startDate: new Date('01/01/2018'),
    technicalEnvironment:
      'Redesign and development of the "Cloud Customer Connect" community as a responsive platform, writing several components from scratch as vanilla custom web components. These were noteworthy challenges due to the closed environment of the community and the lack of source code.',
  },
  {
    company: 'DXC Technology',
    endDate: new Date('12/01/2017'),
    project:
      'Design, development, testing, and support to more than 78 applications as part of the FAST (Future Architecture for Software) program which incorporates MuleSoft technology on current DXC Integration team assets.',
    roleTitle: 'Mulesoft Developer',
    skills: [
      'AJAX',
      'Angular',
      'CSS',
      'Firebase',
      'FireStore',
      'JavaScript',
      'JSON',
      'LESS',
      'Node.js',
      'REST',
      'SOAP',
      'XHTML',
      'XML',
    ],
    startDate: new Date('01/01/2017'),
    technicalEnvironment:
      'Mulesoft technology, REST and SOAP API’s, JSON, XML, RAML, YML.',
  },
  {
    company: 'Hewlett Packard Enterprise (HPE),',
    endDate: new Date('12/01/2016'),
    project:
      'Expansion and development of "TIBCO Shortcut", an extensible TIBCO ActiveMatrix BPM framework written in AngularJS and stylized with Bootstrap.',
    roleTitle: 'Senior Web Developer',
    skills: [
      'AJAX',
      'Angular',
      'CSS',
      'Firebase',
      'FireStore',
      'JavaScript',
      'JSON',
      'LESS',
      'Node.js',
      'REST',
      'SOAP',
      'XHTML',
      'XML',
    ],
    startDate: new Date('03/01/2015'),
    technicalEnvironment: 'Angular JS, REST and SOAP APIs, Sass.',
  },
];
