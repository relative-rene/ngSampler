import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
  providers:[TaskService]

})
export class TaskComponent implements OnInit {

  public task!: { id: number, name: string };
  public title: string = "Current Task";
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTask().subscribe((data) => {
      this.task = data;
    })
  }
  getNewTask() {
    this.taskService.getTask().subscribe((data) => {
      this.task = data;
    })
  }

}
