import { Component } from '@angular/core';
import { GithubComponent } from '../github/github.component';
import { GitActionsComponent } from '../git-actions/git-actions.component';
import { SnykComponent } from '../snyk/snyk.component';
import { SonarComponent } from '../sonar/sonar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GithubComponent, GitActionsComponent, SnykComponent, SonarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
