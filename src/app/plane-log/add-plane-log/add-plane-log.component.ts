import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Member } from '../../models/member.model';
import { MemberService } from '../../services/member.service';
import { AuthService } from '../../services/auth.service';
import { Plane } from '../../models/plane.model';
import { PlaneService } from '../../services/plane.service';

@Component({
  selector: 'app-add-plane-log',
  templateUrl: './add-plane-log.component.html',
  styleUrls: ['./add-plane-log.component.css']
})
export class AddPlaneLogComponent implements OnInit {
  planes: Plane[];
  member: Member;
  planeName: string;
  location: string;
  initialFuelLevel: string;
  finalFuelLevel: string;
  price: string;
  date= new Date();

  planeNameFormControl: FormControl;
  locationFormControl: FormControl;
  initialFuelLevelFormControl: FormControl;
  finalFuelLevelFormControl: FormControl;
  priceFormControl: FormControl;


  constructor( public addLogDialogRef: MatDialogRef<AddPlaneLogComponent>, public snackBar: MatSnackBar,
    public planeService: PlaneService, public memberService: MemberService, public authService: AuthService ) { 
    addLogDialogRef.disableClose = true;

    this.planes = [];
    this.location= '';
    this.initialFuelLevel= '';
    this.finalFuelLevel= '';
    this.price= '';

    this.planeNameFormControl = new FormControl ('', [
      Validators.required,
    ]);
    this.locationFormControl = new FormControl ('', [
      Validators.required,
    ]);
    this.initialFuelLevelFormControl = new FormControl ('', [
      Validators.required,
    ]);
    this.finalFuelLevelFormControl = new FormControl ('', [
      Validators.required,
    ]);
    this.priceFormControl = new FormControl ('', [
      Validators.required,
    ]);
   }

   public saveLogData(): void {
    if (this.checkRequiredFields()) {
      const newLog = {
        planeName: this.planeNameFormControl.value,
        member: this.member.id,
        location: this.locationFormControl.value,
        date: this.formatDate(new Date(
          this.date.getFullYear(),
          this.date.getMonth(),
          this.date.getDate(),
          // parseInt(this.date.slice(0, 2), 10),
          // parseInt(this.date.slice(3, 5), 10)
        ).toString()),
        initialFuelLevel: this.initialFuelLevelFormControl.value,
        finalFuelLevel: this.finalFuelLevelFormControl.value,
        price: this.priceFormControl.value
      };
      this.addLogDialogRef.close(newLog);
      console.log(newLog);
  }}

  public formatDate(date: string): string {
    const parseDate = new Date(date);
    return new Date(parseDate.getTime() - parseDate.getTimezoneOffset() * 60000).toISOString();
  }

   public checkRequiredFields(): boolean {
    if (this.locationFormControl.invalid ) {
      this.snackBar.open('Kein gültiger Ort.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.initialFuelLevelFormControl.invalid) {
      this.snackBar.open('Kein gültiger Anfangsstand.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.finalFuelLevelFormControl.invalid) {
      this.snackBar.open('Keine gültiger Endstand', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.priceFormControl.invalid) {
      this.snackBar.open('Kein gültiger Preis.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } 
    return true;
  }

  ngOnInit() {
    this.planeService.getPlaneListData().subscribe(
      (planedata: Plane[]) => {
        this.planes = planedata;
      }
    );
    this.memberService.getMemberData(this.authService.getMemberID()).subscribe(
      (memberdata: Member) => {
        this.member = memberdata;
      }
    );
  }

}
