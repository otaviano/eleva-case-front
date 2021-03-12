import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSelectListComponent } from './select-list.component';

describe('ListComponent', () => {
  let component: SchoolSelectListComponent;
  let fixture: ComponentFixture<SchoolSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolSelectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
