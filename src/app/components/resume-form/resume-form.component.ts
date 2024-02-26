/* ••[1]••••••••••••••••••••••••• resume-form.component.ts •••••••••••••••••••••••••••••• */

import { ContactT, ProfileT } from '../../entities/resumeForm.type';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
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

type ResumeFormGroupT = FormGroup<{
  contact: ContactFormGroupT;
  profile: ProfileFormGroupT;
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

  protected resumeForm: ResumeFormGroupT = new FormGroup({
    contact: new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z0-9]+$/),
      ]),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[\w]+$/),
      ]),
    }),
    profile: new FormGroup({
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[\w,.]+$/),
      ]),
    }),
  });

  protected onSubmit(event: SubmitEvent, form: ResumeFormGroupT): void {
    console.log('%c\nonSubmit', 'color: SpringGreen');
    console.log('event: %O', event);
    console.log('form: %O', form);
    console.log('this.resumeForm: %O', this.resumeForm);
  }
}
