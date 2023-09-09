import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExerciseLogComponent } from './add-exercise-log.component';

describe('AddExerciseLogComponent', () => {
  let component: AddExerciseLogComponent;
  let fixture: ComponentFixture<AddExerciseLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExerciseLogComponent]
    });
    fixture = TestBed.createComponent(AddExerciseLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
