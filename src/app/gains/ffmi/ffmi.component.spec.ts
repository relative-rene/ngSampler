import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfmiComponent } from './ffmi.component';

describe('FfmiComponent', () => {
  let component: FfmiComponent;
  let fixture: ComponentFixture<FfmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FfmiComponent]
    });
    fixture = TestBed.createComponent(FfmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
