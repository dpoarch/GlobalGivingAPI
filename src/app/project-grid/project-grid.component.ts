import { Component, OnInit } from '@angular/core';
import { Project, allProjectList } from '../models/project-list.model';
import { ProjectListService } from '../services/project-list.service';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.css']
})
export class ProjectGridComponent implements OnInit {

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
