import { Component, OnInit } from '@angular/core';
import { PlaneListService } from './../services/planelist.service';
import { Plane, neededAuthorizationEnum } from './../models/plane.model';

import { MatDialog, MatSnackBar } from '@angular/material';
import { EditPlaneDialogComponent } from './edit-plane-dialog/edit-plane-dialog.component';
import { PlaneUpdateService } from '../services/plane-update.service';

@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.css']
})
export class PlaneListComponent implements OnInit {

  planes: Plane[];

  constructor(public planelistService: PlaneListService, public editPlaneDialog: MatDialog,
    public planeUpdateService: PlaneUpdateService, public snackBar: MatSnackBar) {
    this.planes = [];
  }

  ngOnInit() {
    this.planelistService.getPlaneListData().subscribe(
      (planedata: Plane[]) => {
        this.planes = planedata;
        for (let i = 0; i < this.planes.length; i++) {
          this.planes[i].neededAuthorization = neededAuthorizationEnum[this.planes[i].neededAuthorization];
        }
      }
    );
  }

  public openEditPlaneDialog(plane: Plane): void {
    const dialogRef = this.editPlaneDialog.open(EditPlaneDialogComponent, {
      maxWidth: '100vw',
      minWidth: '0px',
      maxHeight: '90vh',
      disableClose: true,
      data: JSON.parse(JSON.stringify(plane))
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.savePlane(result);
      }
    });
  }

  public savePlane(plane: Plane): void {
    const newPlaneData = JSON.parse(JSON.stringify(plane));
    const planeId = plane.id;
    plane = this.formatStringToEnum(plane);
    this.planeUpdateService.updatePlaneData(plane).subscribe(
      (response) => {
        if (response.status === 204) {
          this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
            {
              duration: 3000,
            }
          );
          const planeIndex = this.findPlaneIndex(planeId);
          if (planeIndex !== -1) {
            this.planes[planeIndex] = newPlaneData;
          }
        }
      },
      error => {
        if (error.status === 400) {
          this.snackBar.open('Pflichtfelder nicht ausgefüllt', 'Schließen',
            {
              duration: 4000,
            }
          );
        } else if (error.status === 404) {
          this.snackBar.open('Flugzeug nicht gefunden.', 'Schließen',
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

  public formatStringToEnum(plane: any): Plane {
    plane.neededAuthorizationEnum = neededAuthorizationEnum.getEnumString(plane.neededAuthorizationEnum);
    return plane;
  }

  public findPlaneIndex(planeId: number): number {
    for (let i = 0; i < this.planes.length; i++) {
      if (this.planes[i].id === planeId) {
        return i;
      }
    }
    return -1;
  }

}
