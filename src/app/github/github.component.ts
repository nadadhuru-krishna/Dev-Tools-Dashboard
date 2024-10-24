import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent implements OnInit{
  allProjects: any;
  selectProjectDetails: any;
  githubRepo: any = {};
  gitActivity: any = {};
  projectSelected: boolean= false;
  gitActivityArray: any = [];
  selectedActivity: any;

  constructor(private service: CommonServiceService) {
    
  }

  ngOnInit() {
    this.service.projectChange.subscribe((resp=>{
      if(resp !== ""){
        this.fetchProjectDetails(resp);
      }
    }))
  }

  fetchProjectDetails(data:string){
    this.service.getProjectDetails().subscribe(res=>{
      this.allProjects = res.projects;
      this.selectProjectDetails = this.allProjects.filter((project:any) => project.projectName === data)[0];
      this.getRepoDetails();
    })
  }
  getRepoDetails(){
    this.service.getRepoDetails(this.selectProjectDetails.github).subscribe(res=>{
      this.projectSelected = true;
      console.log(res);
      this.githubRepo = {name: res.name};
    });
    this.service.getRepoActivityDetails(this.selectProjectDetails.github).subscribe(res=>{
      console.log(res);
      this.gitActivityArray = res;
      this.gitActivity = {
        latestActivity: res[0].activity_type,
        contributor: res[0].actor.login,
        time: res[0].timestamp,
        branch: res[0].ref.split('refs/heads/')[1]
      }
    })
  }

  onRowSelect(event: any) {
    if (event) {
      this.service.selectedGitActivityChange.next(event);
    }
  }
}
