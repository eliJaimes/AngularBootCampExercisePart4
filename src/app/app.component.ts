/* ••[1]••••••••••••••••••••••••• app.component.ts •••••••••••••••••••••••••••••• */

import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { DOCUMENT } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [
    MatSlideToggleModule,
    MatToolbarModule,
    ResumeFormComponent,
    RouterOutlet,
  ],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  protected titleLabel: string = 'Apex • MDC Resume Generator';

  protected isDarkTheme: boolean = true;

  protected themeToggleLabel: string = 'Dark theme:';

  public constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer2: Renderer2
  ) {}

  public ngOnInit(): void {
    this.document.title = this.titleLabel;
  }

  protected themeChangeHandler(event: MatSlideToggleChange): void {
    if (event.checked) {
      this.renderer2.addClass(this.document.body, 'dark');
    } else {
      this.renderer2.removeClass(this.document.body, 'dark');
    }

    this.isDarkTheme = !this.isDarkTheme;
  }
}
