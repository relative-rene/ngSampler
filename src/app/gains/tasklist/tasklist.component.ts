import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItaskListCollection } from '../annotations/gains.interface';
import { GainsService } from '../services/gains.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
  addTaskForm!: FormGroup;
  $taskList!: Observable<ItaskListCollection | any>

  constructor(private gainsService: GainsService) { }
  onSubmit() {
    this.gainsService.addTask(this.addTaskForm.value)
  }

  ngOnInit() {
    this.$taskList = this.gainsService.getTaskList();
  }

}
