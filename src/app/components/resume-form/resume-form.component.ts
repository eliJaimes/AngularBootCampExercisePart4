/* ••[1]••••••••••••••••••••••••• resume-form.component.ts •••••••••••••••••••••••••••••• */

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

type ContactFormGroupT = FormGroup<{
  name: FormControl<string | null>;
  title: FormControl<string | null>;
}>;

type ResumeFormGroupT = FormGroup<{
  contact: ContactFormGroupT;
}>;

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-resume-form',
  standalone: true,
  templateUrl: './resume-form.component.html',
})
export class ResumeFormComponent {
  protected resumeForm: ResumeFormGroupT = new FormGroup({
    contact: new FormGroup({
      name: new FormControl(''),
      title: new FormControl(''),
    }),
  });
}
