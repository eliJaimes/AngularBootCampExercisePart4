/* ••[1]••••••••••••••••••••••••• resume-form.component.ts •••••••••••••••••••••••••••••• */

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-resume-form',
  standalone: true,
  templateUrl: './resume-form.component.html',
})
export class ResumeFormComponent {
  protected resumeForm: unknown = new FormGroup({
    contact: new FormGroup({
      name: new FormControl(''),
      title: new FormControl(''),
    }),
  });
}
