import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolListComponent } from './school/components/list/list.component';
import { SchoolCreateComponent } from './school/components/create/create.component';
import { ClassListComponent } from './class/components/list/list.component';
import { ClassCreateComponent } from './class/components/create/create.component';

const routes: Routes = [
  { path: '', redirectTo: 'schools', pathMatch: 'full' },
  { path: 'schools', component: SchoolListComponent },
  { path: 'schools/create', component: SchoolCreateComponent },
  { path: 'classes', component: ClassListComponent },
  { path: 'classes/create', component: ClassCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }