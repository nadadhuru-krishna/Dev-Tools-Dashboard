import { Component, inject, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, ValueChangeEvent} from '@angular/forms';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddDetailsComponent } from '../add-details/add-details/add-details.component';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  selectedProject : any;
  readonly dialog = inject(MatDialog);

  projectList : any;

  constructor(private service: CommonServiceService){

  }

  ngOnInit(): void {
    this.projectList = this.service.projectList;
    window?.sessionStorage?.setItem('token', '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');
  }

  onButtonClick(){
    const dialogRef = this.dialog.open(AddDetailsComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.value) {
        this.service.projectList.push({
          key: result?.value?.name,
          value: result?.value?.name
        })
      }
    });
  }

  onChange(event: any){
    console.log(event);
    this.service.projectChange.next(event.value);
  }
}
