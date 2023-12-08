import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACGComponent } from './app.component';

describe('ACGComponent', () => {
  let component: ACGComponent;
  let fixture: ComponentFixture<ACGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ACGComponent]
    });
    fixture = TestBed.createComponent(ACGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
