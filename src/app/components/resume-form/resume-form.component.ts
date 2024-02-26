/* ••[1]••••••••••••••••••••••••• resume-form.component.ts •••••••••••••••••••••••••••••• */

import {
  CapabilityT,
  ContactT,
  ProfileT,
} from '../../entities/resumeForm.type';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgTemplateOutlet } from '@angular/common';

type ContactFormGroupT = FormGroup<{
  name: FormControl<ContactT['name'] | null>;
  title: FormControl<ContactT['title'] | null>;
}>;

type ProfileFormGroupT = FormGroup<{
  description: FormControl<ProfileT['description'] | null>;
}>;

type CapabilityFormGroupT = FormGroup<{
  description: FormControl<CapabilityT['description'] | null>;
  title: FormControl<CapabilityT['title'] | null>;
}>;

type ResumeFormGroupT = FormGroup<{
  contact: ContactFormGroupT;
  profile: ProfileFormGroupT;
  capabilities: FormArray<CapabilityFormGroupT>;
}>;

@Component({
  imports: [
    NgTemplateOutlet,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
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

  protected resumeForm: ResumeFormGroupT = new FormGroup({
    capabilities: new FormArray([
      new FormGroup({
        description: new FormControl('', this.extendedSentenceValidators),
        title: new FormControl('', this.sentenceValidators),
      }),
    ]),
    contact: new FormGroup({
      name: new FormControl('', this.sentenceValidators),
      title: new FormControl('', this.sentenceValidators),
    }),
    profile: new FormGroup({
      description: new FormControl('', this.extendedSentenceValidators),
    }),
  });

  protected onSubmit(_event: SubmitEvent, _form: ResumeFormGroupT): void {
    console.log('%c\nonSubmit', 'color: SpringGreen');
    console.log('this.resumeForm.value: %O', this.resumeForm.value);
  }
}
