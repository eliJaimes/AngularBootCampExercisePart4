/* ••[1]••••••••••••••••••••••••• confirmation-dialog.component.ts •••••••••••••••••••••••••••••• */

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogDataT } from '../../entities/confirmationDialogData.type';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UpperCasePipe } from '@angular/common';

@Component({
  imports: [MatDialogModule, MatButtonModule, MatIconModule, UpperCasePipe],
  selector: 'app-confirmation-dialog',
  standalone: true,
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent {
  protected noLabel: string = 'No';
  protected yesLabel: string = 'Yes';

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogDataT
  ) {}
}
