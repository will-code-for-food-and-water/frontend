import { Component, OnInit } from '@angular/core';
import { PlaneListService } from './../services/planelist.service';
import { Plane, neededAuthorizationEnum } from './../models/plane.model';
import { AddPlaneFormComponent } from '../add-plane-form/add-plane-form.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddPlaneService } from '../services/add-plane.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.css']
})
export class PlaneListComponent implements OnInit {

  planes: Plane;

  constructor(public planelistService: PlaneListService, public addPlaneDialog: MatDialog, public snackBar: MatSnackBar,
    public addPlaneService: AddPlaneService, public activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.planelistService.getPlaneListData(params['id']).subscribe(
          (data: Plane) => {
            this.planes = data;
            this.planes.neededAuthorization = neededAuthorizationEnum[this.planes.neededAuthorization];
          }
        );
      }
    );
  }

  public savePlaneData(planes: Plane): void {
      console.log(planes);
      const newPlanesData = JSON.parse(JSON.stringify(planes));
      planes = this.formatStringToEnum(planes);
      this.addPlaneService.addPlaneData(planes).subscribe(
        (response) => {
          if (response.status === 204) {
            this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
              {
                duration: 3000,
              }
            );
            this.planes = newPlanesData;
          }
        },
        error => {
          if (error.status === 400) {
            this.snackBar.open('Pflichtfelder nicht ausgefüllt', 'Schließen',
              {
                duration: 4000,
              }
            );
          } else if (error.status === 0) {
            this.snackBar.open('Es konnte keine Verbindung zum Server aufgebaut werden', 'Schließen',
              {
                duration: 4000,
              }
            );
          }
        }
      );
    }

    openAddPlaneDialog(): void {
      const dialogRef = this.addPlaneDialog.open(AddPlaneFormComponent, {
        data: JSON.parse(JSON.stringify(this.planes))
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

    public formatStringToEnum(plane: any): any {
      plane.neededAuthorization = neededAuthorizationEnum.getEnumString(plane.neededAuthorization);

      return plane;
    }

  }
