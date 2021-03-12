import { Component, OnInit } from '@angular/core';

import { Class } from '../../models/class.model';
import { SchoolSelectListComponent } from '../../../school/components/select-list';
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

  createclass(): void {
    const data = {
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

  newclass(): void {
    this.submitted = false;
    this.class = new Class();
  }
}
