import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolCreateComponent } from './components/create/create.component';
import { SchoolListComponent } from './components/list/list.component';



@NgModule({
  declarations: [SchoolCreateComponent, SchoolListComponent],
  imports: [
    CommonModule
  ]
})
export class SchoolModule { }
