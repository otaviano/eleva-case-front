import { Component, OnInit } from '@angular/core';

import { Class } from '../../models/class.model';
import { ClassService } from 'src/app/class/services/class.service';

@Component({
  selector: 'app-class-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class ClassCreateComponent implements OnInit {
  class = new Class();
  submitted = false;

  constructor(private classService: ClassService) { }

  ngOnInit(): void { }

  createClass(): void {
    const data = {
      SchoolId: Number(this.class.SchoolId),
      Name: this.class.Name,
      Description: this.class.Description
    };

    this.classService.create(data)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.submitted = true;
        },
        (error: any) => {
          console.log(error);
        });
  }

  onSelectedSchool(schoolId: number) {
    this.class.SchoolId = schoolId;
  }

  newClass(): void {
    this.submitted = false;
    this.class = new Class();
  }
}
