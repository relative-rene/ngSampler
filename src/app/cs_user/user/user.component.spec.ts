import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { PostService } from '../services/post.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers:[PostService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
