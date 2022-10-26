import { Component, OnInit } from '@angular/core';
import { Project, allProjectList } from '../models/project-list.model';
import { ProjectListService } from '../services/project-list.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  rowsData!: allProjectList;
  projects!: Project[];
  nextProjectId: any[] = [];
  showProject: any[] = [];
  search: any;
  

  constructor(private projectListService : ProjectListService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData(){
    const response = await this.projectListService.getAllProjects().toPromise();
      console.log(response.projects.nextProjectId);
      
      if(response.projects.hasNext){
        for(let i = 1; i <= 5; i++){
          this.projectListService.processData(parseInt(response.projects.nextProjectId)).subscribe(response => {
            response.projects.project.forEach(
                res => this.showProject.push(res)
            )
          })
        }
      }
    console.log(this.showProject)

  }
}
