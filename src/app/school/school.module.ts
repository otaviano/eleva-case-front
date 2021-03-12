import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms'; 
import { RouterModule }   from '@angular/router'; 

import { SchoolCreateComponent } from './components/create/create.component';
import { SchoolListComponent } from './components/list/list.component';
//import { SchoolSelectListComponent } from './components/select-list/select-list.component';

@NgModule({
  declarations: [
    SchoolCreateComponent, 
    SchoolListComponent
    //, SchoolSelectListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})

export class SchoolModule { }
