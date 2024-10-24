import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailsComponent } from './add-details.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';

xdescribe('AddDetailsComponent', () => {
  let component: AddDetailsComponent;
  let fixture: ComponentFixture<AddDetailsComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDetailsComponent, MatDialogModule],
      providers: [provideHttpClient(),
        provideHttpClientTesting(),]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDetailsComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
