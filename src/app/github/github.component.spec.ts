import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubComponent } from './github.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CommonServiceService } from '../services/common-service.service';
import { provideHttpClient } from '@angular/common/http';

describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubComponent],
      providers: [CommonServiceService, provideHttpClient(),
        provideHttpClientTesting(),]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
