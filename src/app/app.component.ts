/* ••[1]••••••••••••••••••••••••• app.component.ts •••••••••••••••••••••••••••••• */

import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [MatToolbarModule, ResumeFormComponent, RouterOutlet],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  protected titleLabel: string = 'Apex • MDC Resume Generator';

  public constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  public ngOnInit(): void {
    this.document.title = this.titleLabel;
  }
}
