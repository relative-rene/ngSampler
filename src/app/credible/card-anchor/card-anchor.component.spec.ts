import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnchorComponent } from './card-anchor.component';

describe('CardAnchorComponent', () => {
  let component: CardAnchorComponent;
  let fixture: ComponentFixture<CardAnchorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAnchorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
