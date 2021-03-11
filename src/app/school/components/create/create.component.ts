import { Component, OnInit } from '@angular/core';

import { School } from '../../models/school.model';
import { SchoolService } from 'src/app/school/services/school.service';

@Component({
  selector: 'app-school-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class SchoolCreateComponent implements OnInit {
  school = new School();
  submitted = false;

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void { }

  createSchool(): void {
    const data = {
      Name: this.school.Name,
      Description: this.school.Description
    };

    this.schoolService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newSchool(): void {
    this.submitted = false;
    this.school = new School();
  }
}
