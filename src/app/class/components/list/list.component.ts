import { Component, OnInit } from '@angular/core';

import { Class } from '../../models/class.model';
import { ClassService } from 'src/app/class/services/class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ClassListComponent implements OnInit {
  classes: Class[];
  name = '';
  schoolId = 0;

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
  }

  onSelectedSchool(schoolId: number) {
    this.schoolId = schoolId;
  }

  search(): void {
    this.classService.search(this.schoolId, this.name)
      .subscribe(
        p => {
          this.classes = p;
          console.log(this.classes);
        },
        error => {
          console.log(error);
        });
  }
}
