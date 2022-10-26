import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectGridComponent } from './project-grid/project-grid.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  { path: 'project-list', component: ProjectListComponent },
  { path: 'project-grid', component: ProjectGridComponent },
  { path: '',   redirectTo: '/project-list', pathMatch: 'full' }, // redirect to 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
