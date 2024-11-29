import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,  MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'], // Correct path here
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { courseId: number }
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true); // Pass `true` on confirm
  }
}
