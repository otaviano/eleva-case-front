import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const baseURL = `${environment.apiUrl}/api/Classes`;

@Injectable( { providedIn: 'root' } )
export class ClassService {

  constructor(private httpClient: HttpClient) { }

  create(data): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }
  
  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  search(schoolId:number, name:string): Observable<any> {
    return this.httpClient.get(`${baseURL}?schoolId=${schoolId}&name=${name}`);
  }
}