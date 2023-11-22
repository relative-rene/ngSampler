import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcgComponent } from './app.component';

describe('AcgComponent', () => {
  let component: AcgComponent;
  let fixture: ComponentFixture<AcgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcgComponent]
    });
    fixture = TestBed.createComponent(AcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
