import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExerciseFormComponent } from './add-exercise-form.component';

describe('AddExerciseFormComponent', () => {
  let component: AddExerciseFormComponent;
  let fixture: ComponentFixture<AddExerciseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExerciseFormComponent]
    });
    fixture = TestBed.createComponent(AddExerciseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
