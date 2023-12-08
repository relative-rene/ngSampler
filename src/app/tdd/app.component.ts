import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'tdd',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[TaskComponent]
  
})
export class TDDComponent {
  title = 'app works!';
 
  ngOnInit() {
 
  }


}
