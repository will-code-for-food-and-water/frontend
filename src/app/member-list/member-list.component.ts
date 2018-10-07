import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { ListMember } from './../models/list-member.model';
import { MemberListService } from './../services/memberlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  displayedColumns: string[];
  dataSource: any;

  constructor(public memberListService: MemberListService, public router: Router) {
    this.displayedColumns = ['id', 'firstName', 'lastName'];
  }

  ngOnInit() {
    this.memberListService.getMemberListData().subscribe(
      (data: ListMember[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

  public navigateTo(rowId): void {
    this.router.navigate(['/member', rowId]);
  }

}
