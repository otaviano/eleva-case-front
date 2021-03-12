import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: ClassCreateComponent;
  let fixture: ComponentFixture<ClassCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
