import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms'; 
import { RouterModule }   from '@angular/router'; 

import { ClassCreateComponent } from './components/create/create.component';
import { ClassListComponent } from './components/list/list.component';
import { SchoolSelectListComponent } from '../school/components/select-list/select-list.component';

@NgModule({
  declarations: [
    ClassCreateComponent, 
    ClassListComponent,
    SchoolSelectListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})

export class ClassModule { }
