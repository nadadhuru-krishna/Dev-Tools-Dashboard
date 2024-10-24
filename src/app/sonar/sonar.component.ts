import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sonar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sonar.component.html',
  styleUrl: './sonar.component.css'
})
export class SonarComponent implements OnInit {
  projectSelected: boolean = false;

  constructor(private commonService: CommonServiceService) {}

    ngOnInit(): void {
      this.commonService.projectChange.subscribe((value) => {
        if (value) {
          this.projectSelected = true;
        }
      })
    }
}
