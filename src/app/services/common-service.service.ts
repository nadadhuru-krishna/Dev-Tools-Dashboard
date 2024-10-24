import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService implements OnInit {

  projectChange = new BehaviorSubject('');
  projectList = [{key:'all-in-one-dashboard', value: 'All-In-One-Dashboard'}];
  selectedGitActivityChange = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  ngOnInit(){
    
  }

  getProjectDetails():Observable<any>{
    return this.http.get<any>('../../../assets/json/projects.json');
  }

  getRepoDetails(data :any):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${window?.sessionStorage?.getItem('token')}`
    });
    return this.http.get<any>(`https://api.github.com/repos/${data.parentBranch}/${data.branch}`, {headers})
  }

  getRepoActivityDetails(data: any):Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${window?.sessionStorage?.getItem('token')}`
    });
    return this.http.get<any>(`https://api.github.com/repos/${data.parentBranch}/${data.branch}/activity`, {headers})
  }

  getActionsDetails(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${window?.sessionStorage?.getItem('token')}`
    });
    return this.http.get<any>(`https://api.github.com/repos/${data.parentBranch}/${data.branch}/actions/runs`, {headers})
  }

  getActionsWorkflowDetailsUsingId(data: any, runId: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${window?.sessionStorage?.getItem('token')}`
    });
    return this.http.get<any>(`https://api.github.com/repos/${data.parentBranch}/${data.branch}/actions/runs/${runId}`, {headers})
  }

}
