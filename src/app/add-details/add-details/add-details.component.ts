import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-details',
  standalone: true,
  imports: [ReactiveFormsModule,MatButtonModule, MatDialogModule, MatInputModule],
  templateUrl: './add-details.component.html',
  styleUrl: './add-details.component.css'
})
export class AddDetailsComponent implements OnInit {
form : any;

constructor(public dialogRef: MatDialogRef<any>){

}
ngOnInit(){
  this.form = new FormGroup({
    name : new FormControl(''),
    owner : new FormControl('')
  });
}

saveDetails() {
  this.dialogRef.close(this.form);
}
}
