import { Component, OnInit } from '@angular/core';

import { School } from '../../models/school.model';
import { SchoolService } from 'src/app/school/services/school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools: School[];
  name = '';

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {  
    this.readSchools();
  }

  readSchools(): void {
    this.schoolService.readAll()
      .subscribe(
        p => {
          this.schools = p;
          console.log(this.schools);
        },
        error => {
          console.log(error);
        });
  }

  searchByName(): void {
    this.schoolService.searchByName(this.name)
      .subscribe(
        p => {
          this.schools = p;
          console.log(this.schools);
        },
        error => {
          console.log(error);
        });
  }
}
