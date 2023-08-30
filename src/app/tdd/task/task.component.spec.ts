import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { TaskService } from './task.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let de;
  //let mockHttpService = {get: () => {return { subscribe: () => {} }}};
  let mockService;
  let taskService: TaskService;
  beforeEach(async(() => {
    // mockService = {getTask: () => {return of('test item')}};
    // mockService = {getTask:()=>{return { id: 1, name: 'Create Database' }}}
    mockService = jasmine.createSpyObj(mockService, ['getTask']);
    mockService.getTask.and.returnValue({ id: 1, name: 'Create Db' });
    TestBed.configureTestingModule({
      declarations: [TaskComponent],
      providers: [TaskService],
      //providers: [{ provide: TaskService, useValue: mockService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    //  fixture.detectChanges();
    de = fixture.debugElement;
    taskService = TestBed.get(TaskService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a title', () => {
    expect(component.title).toContain('Current');
  });

  it('should set the task when initialised', () => {
    spyOn(taskService, 'getTask')
      .and.returnValue(of({ id: 1, name: 'Create Db' }));
    fixture.detectChanges();
    expect(component.task.name).toContain('Db');
  });
  it('paragraph element should contain test', () => {
    fixture.detectChanges();
    const el = de.query(By.css('p')).nativeElement;
    expect(el.textContent).toContain('test');
  });

  it('should get a new task when button clicked', fakeAsync(() => {
    spyOn(taskService, 'getTask')
      .and.returnValues(
      of({ id: 1, name: 'Create Db' }),
      of({ id: 2, name: 'Create Frontend' }).timeout(2000)
      );
    fixture.detectChanges();
    expect(component.task.name).toContain('Db');
    const button = de.query(By.css('button')).nativeElement;
    button.click();
    tick(2000); // use with fakeAsync
    // with fake async you cant use xhr
    fixture.detectChanges();
    expect(component.task.name).toContain('Frontend');
  }));

  it('should get a new task when button clicked', async(() => {
    spyOn(taskService, 'getTask')
      .and.returnValues(
      of({ id: 1, name: 'Create Db' }),
      of({ id: 2, name: 'Create Frontend' }).timeout(2000)
      );
    fixture.detectChanges();
    expect(component.task.name).toContain('Db');
    const button = de.query(By.css('button')).nativeElement;
    button.click();
    fixture.whenStable().then(() => { // used with async
      fixture.detectChanges();
      expect(component.task.name).toContain('Frontend');
    })

  }));

});
