import { Component, OnInit } from '@angular/core';
import { PlaneListService } from './../services/planelist.service';
import { Plane, neededAuthorization_enum } from './../models/plane.model';
import { AddPlaneFormComponent } from '../add-plane-form/add-plane-form.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.css']
})
export class PlaneListComponent implements OnInit {

  planes: Plane[];

  constructor(public planelistService: PlaneListService, public addPlaneDialog: MatDialog) {
    this.planes = [];
  }

  ngOnInit() {
    this.planelistService.getPlaneListData().subscribe(
      (planedata: Plane[]) => {
        this.planes = planedata;
        for (let i = 0; i < this.planes.length; i++) {
          this.planes[i].neededAuthorization = neededAuthorization_enum[this.planes[i].neededAuthorization];
        }
        console.log(this.planes);
      }
    );
    }

    openAddPlaneDialog(): void {
      const dialogRef = this.addPlaneDialog.open(AddPlaneFormComponent, {
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

  }
