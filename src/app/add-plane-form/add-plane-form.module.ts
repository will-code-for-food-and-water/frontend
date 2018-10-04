import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPlaneFormComponent } from './add-plane-form.component';
import { MatTabsModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatStepperModule, MatCardModule, MatTooltipModule,
  MatDatepickerModule, MatNativeDateModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatStepperModule,
    MatCardModule, MatTooltipModule, MatDatepickerModule,
    MatNativeDateModule, MatDialogModule, MatTabsModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [AddPlaneFormComponent],

  exports: [AddPlaneFormComponent]
})
export class AddPlaneFormModule { }
