import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { School } from '../../models/school.model';
import { SchoolService } from 'src/app/school/services/school.service';

@Component({
  selector: 'school-select-list',
  templateUrl: './select-list.component.html'
})
export class SchoolSelectListComponent implements OnInit {
  
  @Input() preSelectedId: number;
  @Output() selected = new EventEmitter<number>();

  schools: School[];

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {  
    this.readSchools();
  }

  onSelected(e) {
    this.selected.emit(e.target.value);
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
