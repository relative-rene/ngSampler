import { ACGService } from './services/acg.service';
import { Component } from '@angular/core';

@Component({
  selector: 'acg',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AcgComponent {

  constructor(public acgService: ACGService) { 

    // last update was chapter 565
    // this.acgService.updateChapter("655d4893e832453ca4e1b192",data).subscribe(res=> console.log('we printed', res))
 
  }
}
