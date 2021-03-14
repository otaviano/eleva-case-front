import { of } from 'rxjs/internal/observable/of';
import { School } from '../models/school.model';

import { SchoolService } from './school.service';

describe('SchoolService', () => {
  let service: SchoolService;
  let httpClientSpy: { post: jasmine.Spy, get: jasmine.Spy};

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
    service = new SchoolService(httpClientSpy as any);
  });

  it('should be create a School (HttpClient called once)', () => {
    const expectedSchool: School = { 
      Id: 1, 
      Name: 'xpto', 
      Description: 'xpto' 
    };
  
    httpClientSpy.post.and.returnValue(of(expectedSchool));
  
    service.create(expectedSchool).subscribe(
      c => expect(c).toEqual(expectedSchool, 'expected School'),
      fail
    );
    
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });

  it('should return expected schools (HttpClient called once)', () => {
    const expectedSchools: School[] =
      [
        { Id: 1, Name: 'xpto1', Description: 'xpto1' }, 
        { Id: 2, Name: 'xpto2', Description: 'xpto2' }
      ];
  
    httpClientSpy.get.and.returnValue(of(expectedSchools));
  
    service.readAll().subscribe(
      schools => expect(schools).toEqual(expectedSchools, 'expected schools'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
