import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-add-plane-form',
  templateUrl: './add-plane-form.component.html',
  styleUrls: ['./add-plane-form.component.css']
})
export class AddPlaneFormComponent implements OnInit {

  allgemeinFlugzInfo: FormGroup;


  number = '';
  name = '';
  neededAuthorization = ['PPL-A', 'PPL-e', 'eZF-I', 'eZF-II'];
  position = ['Halle1', 'Halle2'];

  numberFormControl = new FormControl('', [
    Validators.required,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  neededAuthorizationFormControl = new FormControl('', [
    Validators.required,
  ]);
  positionFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.allgemeinFlugzInfo = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

}
