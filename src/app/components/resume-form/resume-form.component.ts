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

type ResumeFormGroupT = FormGroup<{
  contact: ContactFormGroupT;
  profile: ProfileFormGroupT;
  capabilities: FormArray<CapabilityFormGroupT>;
}>;

@Component({
  imports: [
    MatButtonModule,
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
    profile: new FormGroup({
      description: new FormControl('', {
        nonNullable: true,
        validators: this.extendedSentenceValidators,
      }),
    }),
  });

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
    this.resumeForm.controls.capabilities.removeAt(capabilityIndex);
  }

  protected onSubmit(_event: SubmitEvent, _form: ResumeFormGroupT): void {
    console.log('%c\nonSubmit', 'color: SpringGreen');
    console.log('this.resumeForm.value: %O', this.resumeForm.value);
  }
}
