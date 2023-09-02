import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../../shared/toast/toast.component';

@Component({
  selector: 'app-habitat-mentorship-first-time',
  templateUrl: './habitat-mentorship-first-time.component.html',
  styleUrls: ['./habitat-mentorship-first-time.component.css']
})
export class HabitatMentorshipFirstTimeComponent implements OnInit {

  constructor(public toast: ToastComponent) { }

  ngOnInit() {
  }

}
