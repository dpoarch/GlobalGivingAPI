import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { allProjectList } from '../models/project-list.model';
import { ProjectIds } from '../models/project-id.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectListService {
  arrayOfObservables = [];
  private allprojectAPI: string = `https://api.globalgiving.org/api/public/projectservice/all/projects/active?api_key=${environment.globalkeyAPI}`
  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<allProjectList>{
    return this.http.get<allProjectList>(this.allprojectAPI);
  }

  getAllProjectId(): Observable<ProjectIds>{
    return this.http.get<ProjectIds>(`https://api.globalgiving.org/api/public/projectservice/all/projects/ids?api_key=${environment.globalkeyAPI}`);
  }

  processData(nextProjectId: number){
    return this.http.get<allProjectList>(this.allprojectAPI.concat(`&nextProjectId=${nextProjectId}`));
  }
}
