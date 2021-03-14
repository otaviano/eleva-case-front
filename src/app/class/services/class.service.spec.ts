import { of } from 'rxjs/internal/observable/of';

import { Class } from '../models';
import { ClassService } from './class.service';

describe('ClassService', () => {
  let service: ClassService;
  let httpClientSpy: { post: jasmine.Spy, get: jasmine.Spy};

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
    service = new ClassService(httpClientSpy as any);
  });

  it('should be create a class (HttpClient called once)', () => {
    const expectedClass: Class = { 
      SchoolId: 1, 
      Name: 'xpto', 
      Description: 'xpto' 
    };
  
    httpClientSpy.post.and.returnValue(of(expectedClass));
  
    service.create(expectedClass).subscribe(
      c => expect(c).toEqual(expectedClass, 'expected class'),
      fail
    );
    
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });

  it('should return expected classes (HttpClient called once)', () => {
    const expectedClasses: Class[] =
      [
        { SchoolId: 1, Name: 'xpto1', Description: 'xpto1' }, 
        { SchoolId: 2, Name: 'xpto2', Description: 'xpto2' }
      ];
  
    httpClientSpy.get.and.returnValue(of(expectedClasses));
  
    service.readAll().subscribe(
      classes => expect(classes).toEqual(expectedClasses, 'expected classes'),
      fail
    );
    
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
