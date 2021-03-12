import { Component, OnInit, Input } from '@angular/core';

import { School } from '../../models/school.model';
import { SchoolService } from 'src/app/school/services/school.service';

@Component({
  selector: 'school-select-list',
  templateUrl: './select-list.component.html'
})
export class SchoolSelectListComponent implements OnInit {
  
  @Input() preSelectedId: number;
  
  selectedId:number;
  schools: School[];

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {  
    this.readSchools();
    this.selectedId = this.preSelectedId;
  }
  
  get selectedValue(): number {
    return this.selectedId;
  }

  readSchools(): void {
    this.schoolService.readAll()
      .subscribe(
        response => {
          this.schools = response;
          console.log(this.schools);
        },
        error => {
          console.log(error);
        });
  }
}
