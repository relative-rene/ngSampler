import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AirlinesService } from '../data-access/airlines.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.scss']
})
export class AirlinesComponent implements OnInit {
alSub?: Subscription;
airlines: any;

  constructor(private router:Router, private alService: AirlinesService) { }

  ngOnInit(): void {
    this.getAirlines();
  }

  getAirlines(){
    this.alSub = this.alService.getAs(0).subscribe((d)=>{
      this.airlines = d.data;
      console.log(d);
    });
  }

}
