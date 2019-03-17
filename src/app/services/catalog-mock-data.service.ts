import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogMockDataService {

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get("assets/mocks/data.json");
  }


}
