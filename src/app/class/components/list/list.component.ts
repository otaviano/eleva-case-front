import { Component, OnInit } from '@angular/core';

import { Class } from '../../models/class.model';
import { ClassService } from 'src/app/class/services/class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ClassListComponent implements OnInit {
  class: Class[];
  name = '';

  constructor(private classService: ClassService) { }

  ngOnInit(): void {  
    this.readclasss();
  }

  readclasss(): void {
    this.classService.readAll()
      .subscribe(
        p => {
          this.class = p;
          console.log(this.class);
        },
        error => {
          console.log(error);
        });
  }

  searchByName(): void {
    this.classService.searchByName(this.name)
      .subscribe(
        p => {
          this.class = p;
          console.log(this.class);
        },
        error => {
          console.log(error);
        });
  }
}
