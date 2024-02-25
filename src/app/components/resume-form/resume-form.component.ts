/* ••[1]••••••••••••••••••••••••• resume-form.component.ts •••••••••••••••••••••••••••••• */

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { ContactT } from '../../entities/resumeForm.type';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

type ContactFormGroupT = FormGroup<{
  name: FormControl<ContactT['name'] | null>;
  title: FormControl<ContactT['title'] | null>;
}>;

type ResumeFormGroupT = FormGroup<{
  contact: ContactFormGroupT;
}>;

@Component({
  imports: [
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

  /* ••[3]••••• Contact •••••••••• */

  protected contactLabel: string = 'Contact';
  protected contactNameLabel: string = 'Name';
  protected contactTitleLabel: string = 'Title';

  protected resumeForm: ResumeFormGroupT = new FormGroup({
    contact: new FormGroup({
      name: new FormControl(''),
      title: new FormControl(''),
    }),
  });

  protected onSubmit(event: SubmitEvent, form: ResumeFormGroupT): void {
    console.log('%c\nonSubmit', 'color: SpringGreen');
    console.log('event: %O', event);
    console.log('form: %O', form);
    console.log('this.resumeForm: %O', this.resumeForm);
  }
}
