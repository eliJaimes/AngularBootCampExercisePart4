/* ••[1]••••••••••••••••••••••••• resume-form.component.ts •••••••••••••••••••••••••••••• */

import {
  CapabilityFormGroupT,
  CertificationFormGroupT,
  EducationFormGroupT,
  ExperienceFormGroupT,
  ResumeFormGroupT,
  SkillFormControlT,
} from './resume-form.type';
import { Component, ViewChild } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RESUME_FORM_LABELS } from './resume-form.labels';

@Component({
  imports: [
    JsonPipe,
    MatButtonModule,
    MatDatepickerModule,
    MatExpansionModule,
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
  @ViewChild(MatAccordion, { static: true })
  protected matAccordion!: MatAccordion;

  /* ••[2]•••••••••• Labels ••••••••••••••• */

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected label: any = RESUME_FORM_LABELS;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected minLengthErrorFieldLabel: (error: any) => string = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any
  ): string => {
    return `This field should be ${error.minlength.requiredLength} characters long`;
  };

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
          date: new FormControl<Date>(
            {
              disabled: true,
              value: new Date(),
            },
            {
              nonNullable: true,
              validators: Validators.required,
            }
          ),
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
      date: new FormControl<Date>(
        {
          disabled: true,
          value: new Date(),
        },
        {
          nonNullable: true,
          validators: Validators.required,
        }
      ),
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
