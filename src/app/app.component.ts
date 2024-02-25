/* ••[1]••••••••••••••••••••••••• app.component.ts •••••••••••••••••••••••••••••• */

import { Component } from '@angular/core';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [ResumeFormComponent, RouterOutlet],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {}
