import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PlaneLog } from './../models/planelog.model';
import { environment } from '../../environments/environment';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})export class PlaneLogService {

  constructor(public httpClient: HttpClient, public authService: AuthService) { }

  public getPlaneLogData(planeID): Observable<PlaneLog[]>  {
    const url = environment.baseUrl + '/planeLog/' + planeID;
    const headers = this.authService.setAuthHeader();
    return this.httpClient.get<PlaneLog[]>(
      url,
      {
        headers: headers
      }
    );
  }
}
