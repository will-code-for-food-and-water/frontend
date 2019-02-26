import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Member } from './../models/member.model';
import { ListMember } from './../models/list-member.model';

import { environment } from '../../environments/environment';

@Injectable()
export class MemberService {

  constructor(public httpClient: HttpClient) { }

  public getMemberData(id): Observable<Member>  {
    const url = environment.baseUrl + '/members/' + id;
    return this.httpClient.get<Member>(url);
  }

  public getMemberListData(): Observable<ListMember[]>  {
    return this.httpClient.get<ListMember[]>(environment.baseUrl + '/members');
  }

  public deleteMemberData (memberId: number): Observable <any> {
    const url = environment.baseUrl + '/members/' + memberId;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.delete<any>(
      url,
      {
        headers: headers,
        observe: 'response'
      });
  }

  public updateMemberData(memberData: Member): Observable<any> {
    const id = memberData.id;
    const url = environment.baseUrl + '/members/' + id;
    delete memberData['id'];
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(
      url,
      memberData,
      {
        headers: headers,
        observe: 'response'
      }
    );
  }

  public addMemberData(memberData: Member): Observable<any> {
    const url = environment.baseUrl + '/members';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(
      url,
      memberData,
      {
        headers: headers,
        observe: 'response'
      }
    );
  }
}
