import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  @Input() userChoice!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
