import { Injectable } from '@angular/core';
import {Plane} from '../models/plane.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AddPlaneService {

  constructor(public httpClient: HttpClient) { }

    public addPlaneData(planeData: Plane): Observable<any> {
    const id = planeData.id;
    const url = 'http://localhost:3000/planes' + id;
    delete planeData['id'];
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(
      url,
      planeData,
      {
        headers: headers,
        observe: 'response'
      }
    );
  }
}
