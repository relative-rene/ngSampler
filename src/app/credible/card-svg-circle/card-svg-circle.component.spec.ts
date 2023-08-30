import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSvgCircleComponent } from './card-svg-circle.component';

describe('CardSvgCircleComponent', () => {
  let component: CardSvgCircleComponent;
  let fixture: ComponentFixture<CardSvgCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSvgCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSvgCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
