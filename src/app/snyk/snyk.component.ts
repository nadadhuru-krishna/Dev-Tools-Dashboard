import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snyk',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snyk.component.html',
  styleUrl: './snyk.component.css'
})
export class SnykComponent implements OnInit {
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