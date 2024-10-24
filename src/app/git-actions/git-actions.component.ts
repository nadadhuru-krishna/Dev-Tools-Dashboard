import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-git-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './git-actions.component.html',
  styleUrl: './git-actions.component.css'
})
export class GitActionsComponent implements OnInit {
  projectSelected: boolean = false;
  allProjects: any;
  selectProjectDetails: any;
  actionWorkFlowForSelectedActivity: any;
  allActionWorkflows: any;
  constructor(private commonService: CommonServiceService) {}

    ngOnInit(): void {
      this.commonService.projectChange.subscribe((value) => {
        if (value) {
          this.projectSelected = true;
          this.fetchProjectDetails(value);
        }
      });
      this.commonService.selectedGitActivityChange.subscribe((value) => {
        if (value) {
          const selectedObj = this.allActionWorkflows?.['workflow_runs'].filter((workflow: any) => workflow['head_commit']['id'] === Object(value).after)[0];
          this.actionWorkFlowForSelectedActivity = {commitMsg : selectedObj?.['display_title'], event: selectedObj?.event, headBranch: selectedObj?.['head_branch'], status: selectedObj?.status, conclusion: selectedObj?.conclusion,  committer: selectedObj?.['head_commit']['committer']['name']};
        }
      })
    }

    fetchProjectDetails(value: string) {
      this.commonService.getProjectDetails().subscribe(res=>{
        this.allProjects = res.projects;
        this.selectProjectDetails = this.allProjects.filter((project:any) => project.projectName === value)[0];
        this.getActionDetails();
      })
    }

    getActionDetails() {
      let totalActionWorkflowData;
      this.commonService.getActionsDetails(this.selectProjectDetails.github).subscribe(res=>{
        this.projectSelected = true;
        totalActionWorkflowData = res;
        this.allActionWorkflows = totalActionWorkflowData;
        console.log(this.allActionWorkflows);
      });
    }
}
