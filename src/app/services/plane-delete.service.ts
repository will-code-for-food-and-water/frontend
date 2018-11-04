import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Plane } from '../models/plane.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlaneDeleteService {

  constructor(public httpClient: HttpClient) { }

  public deletePlaneData (planeId: number): Observable <any> {
    const url = environment.baseUrl + '/planes/' + planeId;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.delete<any>(
      url,
      {
        headers: headers,
        observe: 'response'
      });
  }
}