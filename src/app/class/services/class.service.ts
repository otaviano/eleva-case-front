import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//const baseURL = 'https://eleva-case.azurewebsites.net/api/Classes';
const baseURL = 'http://localhost:5000/api/Classes';
@Injectable( { providedIn: 'root' } )
export class ClassService {

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