import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatCardModule, MatInputModule } from '@angular/material';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [CommonModule, MatToolbarModule, MatButtonModule,MatCardModule, MatInputModule,FormsModule],
    exports: [CommonModule, MatToolbarModule, MatButtonModule,MatCardModule, MatInputModule,FormsModule],
})
export class CustomMaterialModule { }