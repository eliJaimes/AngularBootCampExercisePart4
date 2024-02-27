/* ••[1]••••••••••••••••••••••••• resume-form.component.ts •••••••••••••••••••••••••••••• */

import {
  CapabilityT,
  CertificationT,
  ContactT,
  EducationT,
  ExperienceT,
  ProfileT,
  SkillT,
} from '../../entities/resumeForm.type';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

type ContactFormGroupT = FormGroup<{
  name: FormControl<ContactT['name']>;
  title: FormControl<ContactT['title']>;
}>;

type ProfileFormGroupT = FormGroup<{
  description: FormControl<ProfileT['description']>;
}>;

type CapabilityFormGroupT = FormGroup<{
  description: FormControl<CapabilityT['description']>;
  title: FormControl<CapabilityT['title']>;
}>;

type SkillFormControlT = FormControl<SkillT>;

type EducationFormGroupT = FormGroup<{
  institution: FormControl<EducationT['institution']>;
  title: FormControl<EducationT['title']>;
}>;

type CertificationFormGroupT = FormGroup<{
  date: FormControl<CertificationT['date']>;
  institution: FormControl<CertificationT['institution']>;
  title: FormControl<CertificationT['title']>;
}>;

type ExperienceFormGroupT = FormGroup<{
  company: FormControl<ExperienceT['company']>;
  endDate: FormControl<ExperienceT['endDate']>;
  project: FormControl<ExperienceT['project']>;
  roleTitle: FormControl<ExperienceT['roleTitle']>;
  skills: FormArray<SkillFormControlT>;
  startDate: FormControl<ExperienceT['startDate']>;
  technicalEnvironment: FormControl<ExperienceT['technicalEnvironment']>;
}>;

type ResumeFormGroupT = FormGroup<{
  contact: ContactFormGroupT;
  profile: ProfileFormGroupT;
  capabilities: FormArray<CapabilityFormGroupT>;
  skills: FormArray<SkillFormControlT>;
  educations: FormArray<EducationFormGroupT>;
  certifications: FormArray<CertificationFormGroupT>;
  experiences: FormArray<ExperienceFormGroupT>;
}>;

@Component({
  imports: [
    JsonPipe,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    NgTemplateOutlet,
    ReactiveFormsModule,
  ],
  selector: 'app-resume-form',
  standalone: true,
  templateUrl: './resume-form.component.html',
})
export class ResumeFormComponent {
  /* ••[2]•••••••••• Labels ••••••••••••••• */

  protected clearLabel: string = 'Clear';
  protected submitLabel: string = 'Submit';

  protected requiredErrorFieldLabel: string = 'This field is required';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected minLengthErrorFieldLabel: (error: any) => string = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any
  ): string => {
    return `This field should be ${error.minlength.requiredLength} characters long`;
  };

  protected patternErrorFieldLabel: string = 'Invalid character on this field';

  /* ••[3]••••• Contact •••••••••• */

  protected contactLabel: string = 'Contact';
  protected contactNameLabel: string = 'Name';
  protected contactTitleLabel: string = 'Title';

  /* ••[3]••••• Profile •••••••••• */

  protected profileLabel: string = 'Profile';
  protected profileDescriptionLabel: string = 'Description';

  /* ••[3]••••• Capabilities •••••••••• */

  protected addCapabilityLabel: string = 'Add capability';
  protected removeCapabilityLabel: string = 'Remove capability';
  protected capabilitiesLabel: string = 'Capabilities';
  protected capabilityLabel: string = 'Capability';
  protected capabilityDescriptionLabel: string = 'Description';
  protected capabilityTitleLabel: string = 'Title';

  /* ••[3]••••• Skills •••••••••• */

  protected addSkillLabel: string = 'Add skill';
  protected removeSkillLabel: string = 'Remove skill';
  protected skillsLabel: string = 'Skills';
  protected skillLabel: string = 'Skill';

  /* ••[3]••••• Educations •••••••••• */

  protected addEducationLabel: string = 'Add education';
  protected removeEducationLabel: string = 'Remove education';
  protected educationsLabel: string = 'Educations';
  protected educationLabel: string = 'Education';
  protected educationInstitutionLabel: string = 'Institution';
  protected educationTitleLabel: string = 'Title';

  /* ••[3]••••• Certifications •••••••••• */

  protected addCertificationLabel: string = 'Add certification';
  protected removeCertificationLabel: string = 'Remove certification';
  protected certificationsLabel: string = 'Certifications';
  protected certificationLabel: string = 'Certification';
  protected certificationDateLabel: string = 'Date of completion';
  protected certificationDateHintLabel: string = 'MM/DD/YYYY';
  protected certificationInstitutionLabel: string = 'Institution';
  protected certificationTitleLabel: string = 'Title';

  /* ••[3]••••• Experiences •••••••••• */

  protected addExperienceLabel: string = 'Add experience';
  protected removeExperienceLabel: string = 'Remove experience';
  protected addSkillToExperienceLabel: string = 'Add skill to experience';
  protected removeSkillFromExperienceLabel: string =
    'Remove skill from experience';

  protected experiencesLabel: string = 'Experiences';
  protected experienceLabel: string = 'Experience';
  protected experienceDateHintLabel: string = 'MM/DD/YYYY';
  protected experienceCompanyLabel: string = 'Company';
  protected experienceEndDateLabel: string = 'End date';
  protected experienceProjectLabel: string = 'Project';
  protected experienceRoleTitleLabel: string = 'Role title';
  protected experienceSkillsLabel: string = 'Skills';
  protected experienceSkillLabel: string = 'Skill';
  protected experienceStartDateLabel: string = 'Start date';
  protected experienceTechnicalEnvironmentLabel: string =
    'Technical environment';

  private sentenceValidators: Array<ValidatorFn> = [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(/^[\w]+$/),
  ];

  private extendedSentenceValidators: Array<ValidatorFn> = [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(/^[\w,.]+$/),
  ];

  protected maxDate: Date = new Date();

  protected resumeForm: ResumeFormGroupT = new FormGroup({
    capabilities: new FormArray(
      [
        new FormGroup({
          description: new FormControl('', {
            nonNullable: true,
            validators: this.extendedSentenceValidators,
          }),
          title: new FormControl('', {
            nonNullable: true,
            validators: this.sentenceValidators,
          }),
        }),
      ],
      Validators.minLength(1)
    ),
    certifications: new FormArray(
      [
        new FormGroup({
          date: new FormControl<Date>(new Date(), {
            nonNullable: true,
            validators: Validators.required,
          }),
          institution: new FormControl('', {
            nonNullable: true,
            validators: this.extendedSentenceValidators,
          }),
          title: new FormControl('', {
            nonNullable: true,
            validators: this.sentenceValidators,
          }),
        }),
      ],
      Validators.minLength(1)
    ),
    contact: new FormGroup({
      name: new FormControl('', {
        nonNullable: true,
        validators: this.sentenceValidators,
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: this.sentenceValidators,
      }),
    }),
    educations: new FormArray(
      [
        new FormGroup({
          institution: new FormControl('', {
            nonNullable: true,
            validators: this.extendedSentenceValidators,
          }),
          title: new FormControl('', {
            nonNullable: true,
            validators: this.sentenceValidators,
          }),
        }),
      ],
      Validators.minLength(1)
    ),
    experiences: new FormArray(
      [
        new FormGroup({
          company: new FormControl('', {
            nonNullable: true,
            validators: this.extendedSentenceValidators,
          }),
          endDate: new FormControl<Date>(new Date(), {
            nonNullable: true,
            validators: Validators.required,
          }),
          project: new FormControl('', {
            nonNullable: true,
            validators: this.extendedSentenceValidators,
          }),
          roleTitle: new FormControl('', {
            nonNullable: true,
            validators: this.sentenceValidators,
          }),
          skills: new FormArray(
            [
              new FormControl('', {
                nonNullable: true,
                validators: this.sentenceValidators,
              }),
            ],
            Validators.minLength(1)
          ),
          startDate: new FormControl<Date>(new Date(), {
            nonNullable: true,
            validators: Validators.required,
          }),
          technicalEnvironment: new FormControl('', {
            nonNullable: true,
            validators: this.extendedSentenceValidators,
          }),
        }),
      ],
      Validators.minLength(1)
    ),
    profile: new FormGroup({
      description: new FormControl('', {
        nonNullable: true,
        validators: this.extendedSentenceValidators,
      }),
    }),
    skills: new FormArray(
      [
        new FormControl('', {
          nonNullable: true,
          validators: this.sentenceValidators,
        }),
      ],
      Validators.minLength(1)
    ),
  });

  /* ••[2]•••••••••• Capabilities ••••••••••••••• */

  protected addCapability(): void {
    const newCapability: CapabilityFormGroupT = new FormGroup({
      description: new FormControl('', {
        nonNullable: true,
        validators: this.extendedSentenceValidators,
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: this.sentenceValidators,
      }),
    });

    this.resumeForm.controls.capabilities.push(newCapability);
  }

  protected removeCapability(capabilityIndex: number): void {
    if (this.resumeForm.controls.capabilities.controls.length > 1) {
      this.resumeForm.controls.capabilities.removeAt(capabilityIndex);
    }
  }

  /* ••[2]•••••••••• Skills ••••••••••••••• */

  protected addSkill(): void {
    const newSkill: SkillFormControlT = new FormControl('', {
      nonNullable: true,
      validators: this.sentenceValidators,
    });

    this.resumeForm.controls.skills.push(newSkill);
  }

  protected removeSkill(skillIndex: number): void {
    if (this.resumeForm.controls.skills.length > 1) {
      this.resumeForm.controls.skills.removeAt(skillIndex);
    }
  }

  /* ••[2]•••••••••• Educations ••••••••••••••• */

  protected addEducation(): void {
    const newEducation: EducationFormGroupT = new FormGroup({
      institution: new FormControl('', {
        nonNullable: true,
        validators: this.extendedSentenceValidators,
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: this.sentenceValidators,
      }),
    });

    this.resumeForm.controls.educations.push(newEducation);
  }

  protected removeEducation(educationIndex: number): void {
    if (this.resumeForm.controls.educations.controls.length > 1) {
      this.resumeForm.controls.educations.removeAt(educationIndex);
    }
  }

  /* ••[2]•••••••••• Certifications ••••••••••••••• */

  protected addCertification(): void {
    const newCertification: CertificationFormGroupT = new FormGroup({
      date: new FormControl<Date>(new Date(), {
        nonNullable: true,
        validators: Validators.required,
      }),
      institution: new FormControl('', {
        nonNullable: true,
        validators: this.extendedSentenceValidators,
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: this.sentenceValidators,
      }),
    });

    this.resumeForm.controls.certifications.push(newCertification);
  }

  protected removeCertification(certificationIndex: number): void {
    if (this.resumeForm.controls.certifications.controls.length > 1) {
      this.resumeForm.controls.certifications.removeAt(certificationIndex);
    }
  }

  /* ••[2]•••••••••• Experiences ••••••••••••••• */

  protected addExperience(): void {
    const newExperience: ExperienceFormGroupT = new FormGroup({
      company: new FormControl('', {
        nonNullable: true,
        validators: this.extendedSentenceValidators,
      }),
      endDate: new FormControl<Date>(new Date(), {
        nonNullable: true,
        validators: Validators.required,
      }),
      project: new FormControl('', {
        nonNullable: true,
        validators: this.extendedSentenceValidators,
      }),
      roleTitle: new FormControl('', {
        nonNullable: true,
        validators: this.sentenceValidators,
      }),
      skills: new FormArray(
        [
          new FormControl('', {
            nonNullable: true,
            validators: this.sentenceValidators,
          }),
        ],
        Validators.minLength(1)
      ),
      startDate: new FormControl<Date>(new Date(), {
        nonNullable: true,
        validators: Validators.required,
      }),
      technicalEnvironment: new FormControl('', {
        nonNullable: true,
        validators: this.extendedSentenceValidators,
      }),
    });

    this.resumeForm.controls.experiences.push(newExperience);
  }

  protected removeExperience(experienceIndex: number): void {
    if (this.resumeForm.controls.experiences.controls.length > 1) {
      this.resumeForm.controls.experiences.removeAt(experienceIndex);
    }
  }

  protected addSkillToExperience(experienceIndex: number): void {
    const newSkillToExperience: SkillFormControlT = new FormControl('', {
      nonNullable: true,
      validators: this.sentenceValidators,
    });

    this.resumeForm.controls.experiences
      .at(experienceIndex)
      .controls.skills.push(newSkillToExperience);
  }

  protected removeFromExperienceSkill(
    experienceIndex: number,
    skillIndex: number
  ): void {
    if (
      this.resumeForm.controls.experiences.at(experienceIndex).controls.skills
        .length > 1
    ) {
      this.resumeForm.controls.experiences
        .at(experienceIndex)
        .controls.skills.removeAt(skillIndex);
    }
  }

  /* ••[2]•••••••••• Resume form ••••••••••••••• */

  protected onSubmit(_event: SubmitEvent, _form: ResumeFormGroupT): void {
    console.log('%c\nonSubmit', 'color: SpringGreen');
    console.log('this.resumeForm.value: %O', this.resumeForm.value);
  }
}
