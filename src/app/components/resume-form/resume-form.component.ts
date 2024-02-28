/* ••[1]••••••••••••••••••••••••• resume-form.component.ts •••••••••••••••••••••••••••••• */

import {
  CapabilityFormGroupT,
  CertificationFormGroupT,
  EducationFormGroupT,
  ExperienceFormGroupT,
  ResumeFormGroupT,
  SkillFormControlT,
} from './resume-form.type';
import {
  CapabilityT,
  CertificationT,
  EducationT,
  ExperienceT,
  ResumeFormT,
  SkillT,
} from '../../entities/resumeForm.type';
import {
  Component,
  inject,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogDataT } from '../../entities/confirmationDialogData.type';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RESUME_FORM_LABELS } from './resume-form.labels';
import { RESUME_FORM_TEST_VALUE } from './resume-form.data';

@Component({
  imports: [
    ConfirmationDialogComponent,
    JsonPipe,
    MatButtonModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
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

  @ViewChildren(MatExpansionPanel)
  protected matExpansionPanels!: QueryList<MatExpansionPanel>;

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
    // Validators.pattern(/^[\w ]+$/),
  ];

  private extendedSentenceValidators: Array<ValidatorFn> = [
    Validators.required,
    Validators.minLength(3),
    // Validators.pattern(/^[\w,. ]+$/),
  ];

  protected maxDate: Date = new Date();

  protected resumeForm: ResumeFormGroupT = new FormGroup({
    capabilities: new FormArray(
      [this.getNewCapability()],
      Validators.minLength(1)
    ),
    certifications: new FormArray(
      [this.getNewCertification()],
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
      [this.getNewEducation()],
      Validators.minLength(1)
    ),
    experiences: new FormArray(
      [this.getNewExperience()],
      Validators.minLength(1)
    ),
    profile: new FormGroup({
      description: new FormControl('', {
        nonNullable: true,
        validators: this.extendedSentenceValidators,
      }),
    }),
    skills: new FormArray([this.getNewSkill()], Validators.minLength(1)),
  });

  private matDialog: MatDialog = inject(MatDialog);
  private matSnackBar: MatSnackBar = inject(MatSnackBar);

  /* ••[2]•••••••••• Capabilities ••••••••••••••• */

  private getNewCapability(): CapabilityFormGroupT {
    return new FormGroup({
      description: new FormControl('', {
        nonNullable: true,
        validators: this.extendedSentenceValidators,
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: this.sentenceValidators,
      }),
    });
  }

  private createCapability(
    capability: CapabilityT,
    capabilityIndex: number,
    append: boolean = true
  ): void {
    if (append) {
      const newCapability: CapabilityFormGroupT = this.getNewCapability();
      newCapability.setValue(capability);
      this.resumeForm.controls.capabilities.controls.push(newCapability);
    } else {
      this.resumeForm.controls.capabilities.controls
        .at(capabilityIndex)
        ?.setValue(capability);
    }

    this.resumeForm.controls.capabilities.updateValueAndValidity();
  }

  protected addCapability(): void {
    this.resumeForm.controls.capabilities.push(this.getNewCapability());
  }

  protected removeCapability(capabilityIndex: number): void {
    if (this.resumeForm.controls.capabilities.controls.length > 1) {
      this.resumeForm.controls.capabilities.removeAt(capabilityIndex);
    }
  }

  /* ••[2]•••••••••• Skills ••••••••••••••• */

  private getNewSkill(): SkillFormControlT {
    return new FormControl('', {
      nonNullable: true,
      validators: this.sentenceValidators,
    });
  }

  private createSkill(
    skill: SkillT,
    skillIndex: number,
    append: boolean = true
  ): void {
    if (append) {
      const newSkill: SkillFormControlT = this.getNewSkill();
      newSkill.setValue(skill);
      this.resumeForm.controls.skills.push(newSkill);
    } else {
      this.resumeForm.controls.skills.at(skillIndex)?.setValue(skill);
    }

    this.resumeForm.controls.skills.updateValueAndValidity();
  }

  protected addSkill(): void {
    this.resumeForm.controls.skills.push(this.getNewSkill());
  }

  protected removeSkill(skillIndex: number): void {
    if (this.resumeForm.controls.skills.length > 1) {
      this.resumeForm.controls.skills.removeAt(skillIndex);
    }
  }

  /* ••[2]•••••••••• Educations ••••••••••••••• */

  private getNewEducation(): EducationFormGroupT {
    return new FormGroup({
      institution: new FormControl('', {
        nonNullable: true,
        validators: this.extendedSentenceValidators,
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: this.sentenceValidators,
      }),
    });
  }

  private createEducation(
    education: EducationT,
    educationIndex: number,
    append: boolean = true
  ): void {
    if (append) {
      const newEducation: EducationFormGroupT = this.getNewEducation();
      newEducation.setValue(education);
      this.resumeForm.controls.educations.controls.push(newEducation);
    } else {
      this.resumeForm.controls.educations.controls
        .at(educationIndex)
        ?.setValue(education);
    }

    this.resumeForm.controls.educations.updateValueAndValidity();
  }

  protected addEducation(): void {
    this.resumeForm.controls.educations.push(this.getNewEducation());
  }

  protected removeEducation(educationIndex: number): void {
    if (this.resumeForm.controls.educations.controls.length > 1) {
      this.resumeForm.controls.educations.removeAt(educationIndex);
    }
  }

  /* ••[2]•••••••••• Certifications ••••••••••••••• */

  private getNewCertification(): CertificationFormGroupT {
    return new FormGroup({
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
  }

  private createCertification(
    certification: CertificationT,
    certificationIndex: number,
    append: boolean = true
  ): void {
    if (append) {
      const newCertification: CertificationFormGroupT =
        this.getNewCertification();
      newCertification.setValue(certification);
      this.resumeForm.controls.certifications.controls.push(newCertification);
    } else {
      this.resumeForm.controls.certifications.controls
        .at(certificationIndex)
        ?.setValue(certification);
    }

    this.resumeForm.controls.certifications.updateValueAndValidity();
  }

  protected addCertification(): void {
    this.resumeForm.controls.certifications.push(this.getNewCertification());
  }

  protected removeCertification(certificationIndex: number): void {
    if (this.resumeForm.controls.certifications.controls.length > 1) {
      this.resumeForm.controls.certifications.removeAt(certificationIndex);
    }
  }

  /* ••[2]•••••••••• Experiences ••••••••••••••• */

  private getNewExperience(): ExperienceFormGroupT {
    return new FormGroup({
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
        [this.getNewSkillToExperience()],
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
  }

  private createExperience(
    experience: ExperienceT,
    experienceIndex: number,
    append: boolean = true
  ): void {
    const experienceWithoutSkills: Omit<ExperienceT, 'skills'> = Object.assign(
      {},
      experience,
      { skills: null }
    );

    if (append) {
      const newExperienceWithoutSkills: ExperienceFormGroupT =
        this.getNewExperience();
      newExperienceWithoutSkills.patchValue(experienceWithoutSkills);

      this.resumeForm.controls.experiences.controls.push(
        newExperienceWithoutSkills
      );
    } else {
      this.resumeForm.controls.experiences.controls
        .at(experienceIndex)
        ?.patchValue(experienceWithoutSkills);
    }

    experience.skills.forEach(
      (skillToExperience: SkillT, skillToExperienceIndex: number): void => {
        this.createSkillToExperience(
          skillToExperience,
          skillToExperienceIndex,
          experienceIndex,
          skillToExperienceIndex !== 0
        );
      }
    );

    this.resumeForm.controls.experiences.updateValueAndValidity();
  }

  protected addExperience(): void {
    this.resumeForm.controls.experiences.push(this.getNewExperience());
  }

  protected removeExperience(experienceIndex: number): void {
    if (this.resumeForm.controls.experiences.controls.length > 1) {
      this.resumeForm.controls.experiences.removeAt(experienceIndex);
    }
  }

  private getNewSkillToExperience(): SkillFormControlT {
    return new FormControl('', {
      nonNullable: true,
      validators: this.sentenceValidators,
    });
  }

  private createSkillToExperience(
    skillToExperience: SkillT,
    skillToExperienceIndex: number,
    experienceIndex: number,
    append: boolean = true
  ): void {
    if (append) {
      const newSkillToExperience: SkillFormControlT = this.getNewSkill();
      newSkillToExperience.setValue(skillToExperience);

      this.resumeForm.controls.experiences
        .at(experienceIndex)
        .controls.skills.push(newSkillToExperience);
    } else {
      this.resumeForm.controls.experiences
        .at(experienceIndex)
        .controls.skills.at(skillToExperienceIndex)
        ?.setValue(skillToExperience);
    }

    this.resumeForm.controls.experiences
      .at(experienceIndex)
      .controls.skills.updateValueAndValidity();
  }

  protected addSkillToExperience(experienceIndex: number): void {
    this.resumeForm.controls.experiences
      .at(experienceIndex)
      .controls.skills.push(this.getNewSkillToExperience());
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

  private triggerMatSnackBar(message: string): void {
    this.matSnackBar.open(message, undefined, {
      duration: 3000,
    });
  }

  private recreateFormInitialState(): void {
    while (this.resumeForm.controls.capabilities.length > 1) {
      this.removeCapability(this.resumeForm.controls.capabilities.length - 1);
    }
    while (this.resumeForm.controls.skills.length > 1) {
      this.removeSkill(this.resumeForm.controls.skills.length - 1);
    }
    while (this.resumeForm.controls.educations.length > 1) {
      this.removeEducation(this.resumeForm.controls.educations.length - 1);
    }
    while (this.resumeForm.controls.certifications.length > 1) {
      this.removeCertification(
        this.resumeForm.controls.certifications.length - 1
      );
    }
    let experienceIndex: number = this.resumeForm.controls.experiences.length;
    while (experienceIndex > 1) {
      while (
        this.resumeForm.controls.experiences.at(experienceIndex - 1).controls
          .skills.controls.length > 1
      ) {
        this.removeFromExperienceSkill(
          experienceIndex - 1,
          this.resumeForm.controls.experiences.at(experienceIndex - 1).controls
            .skills.controls.length - 1
        );
      }
      this.removeExperience(experienceIndex - 1);
      experienceIndex = this.resumeForm.controls.experiences.length;
    }

    while (
      this.resumeForm.controls.experiences.at(experienceIndex - 1).controls
        .skills.controls.length > 1
    ) {
      this.removeFromExperienceSkill(
        experienceIndex - 1,
        this.resumeForm.controls.experiences.at(experienceIndex - 1).controls
          .skills.controls.length - 1
      );
    }
  }

  private resetForm(): void {
    this.matAccordion.closeAll();
    this.recreateFormInitialState();
    this.resumeForm.reset();
    this.matExpansionPanels.get(0)?.open();
  }

  protected triggerResetForm(): void {
    const matDialogRef: MatDialogRef<ConfirmationDialogComponent, boolean> =
      this.matDialog.open<ConfirmationDialogComponent, ConfirmationDialogDataT>(
        ConfirmationDialogComponent,
        {
          data: {
            content: this.label.resetContent,
            icon: 'restart_alt',
            title: this.label.resetTitle,
          },
          width: '400px',
        }
      );

    matDialogRef
      .afterClosed()
      /* NOTE: this observable completes after emission */
      .subscribe((dialogResponse: boolean | undefined): void => {
        if (dialogResponse) {
          this.resetForm();
          this.triggerMatSnackBar(this.label.resetExecuted);
        }
      });
  }

  private loadData(resumeFormValue: ResumeFormT): void {
    this.resetForm();
    this.matAccordion.openAll();

    this.resumeForm.patchValue({
      contact: resumeFormValue.contact,
      profile: resumeFormValue.profile,
    });

    resumeFormValue.capabilities.forEach(
      (capability: CapabilityT, capabilityIndex: number): void => {
        this.createCapability(
          capability,
          capabilityIndex,
          capabilityIndex !== 0
        );
      }
    );

    resumeFormValue.skills.forEach(
      (skill: SkillT, skillIndex: number): void => {
        this.createSkill(skill, skillIndex, skillIndex !== 0);
      }
    );

    resumeFormValue.educations.forEach(
      (education: EducationT, educationIndex: number): void => {
        this.createEducation(education, educationIndex, educationIndex !== 0);
      }
    );

    resumeFormValue.certifications.forEach(
      (certification: CertificationT, certificationIndex: number): void => {
        this.createCertification(
          certification,
          certificationIndex,
          certificationIndex !== 0
        );
      }
    );

    resumeFormValue.experiences.forEach(
      (experience: ExperienceT, experienceIndex: number): void => {
        this.createExperience(
          experience,
          experienceIndex,
          experienceIndex !== 0
        );
      }
    );

    this.resumeForm.updateValueAndValidity();
  }

  protected triggerLoadTestData(): void {
    const matDialogRef: MatDialogRef<ConfirmationDialogComponent, boolean> =
      this.matDialog.open<ConfirmationDialogComponent, ConfirmationDialogDataT>(
        ConfirmationDialogComponent,
        {
          data: {
            content: this.label.loadTestDataContent,
            icon: 'science',
            title: this.label.loadTestDataTitle,
          },
          width: '400px',
        }
      );

    matDialogRef
      .afterClosed()
      .subscribe((dialogResponse: boolean | undefined): void => {
        if (dialogResponse) {
          this.loadData(RESUME_FORM_TEST_VALUE);
          this.triggerMatSnackBar(this.label.loadTestDataExecuted);
        }
      });
  }

  private loadForm(): void {
    try {
      const resumeFormValue: ResumeFormT = JSON.parse(
        localStorage.getItem('resumeFormValue') as string
      );

      if (resumeFormValue) {
        this.loadData(resumeFormValue);
        this.triggerMatSnackBar(this.label.loadFormExecuted);
      } else {
        this.triggerMatSnackBar(this.label.savedDataUnavailable);
      }
    } catch (error) {
      this.triggerMatSnackBar(this.label.errorWhileLoadingSavedData);
    }
  }

  protected triggerLoadForm(): void {
    const matDialogRef: MatDialogRef<ConfirmationDialogComponent, boolean> =
      this.matDialog.open<ConfirmationDialogComponent, ConfirmationDialogDataT>(
        ConfirmationDialogComponent,
        {
          data: {
            content: this.label.loadFormContent,
            icon: 'cloud_download',
            title: this.label.loadFormTitle,
          },
          width: '400px',
        }
      );

    matDialogRef
      .afterClosed()
      .subscribe((dialogResponse: boolean | undefined): void => {
        if (dialogResponse) {
          this.loadForm();
        }
      });
  }

  private saveForm(): void {
    const resumeFormValue: ResumeFormT = this.resumeForm.getRawValue();

    localStorage.setItem('resumeFormValue', JSON.stringify(resumeFormValue));
    this.triggerMatSnackBar(this.label.saveFormExecuted);
  }

  protected triggerSaveForm(): void {
    const matDialogRef: MatDialogRef<ConfirmationDialogComponent, boolean> =
      this.matDialog.open<ConfirmationDialogComponent, ConfirmationDialogDataT>(
        ConfirmationDialogComponent,
        {
          data: {
            content: this.label.saveFormContent,
            icon: 'cloud_upload',
            title: this.label.saveFormTitle,
          },
          width: '400px',
        }
      );

    matDialogRef
      .afterClosed()
      .subscribe((dialogResponse: boolean | undefined): void => {
        if (dialogResponse) {
          this.saveForm();
        }
      });
  }

  protected onSubmit(_event: SubmitEvent, _form: ResumeFormGroupT): void {
    console.log('%c\nonSubmit', 'color: SpringGreen');
    console.log('this.resumeForm.value: %O', this.resumeForm.value);
  }
}
