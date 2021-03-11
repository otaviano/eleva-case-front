import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:5000/api/schools';

@Injectable( { providedIn: 'root' } )
export class SchoolService {

  constructor(private httpClient: HttpClient) { }

  create(data): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }
  
  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  searchByName(name:string): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }
}