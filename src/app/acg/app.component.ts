import { ACGService } from './services/acg.service';
import { Component } from '@angular/core';
import { INovelCollection } from '../gains/annotations/acg.interface';

@Component({
  selector: 'acg',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AcgComponent {
  public $novels!: INovelCollection[];

  constructor(private acgService: ACGService) {
    this.acgService.getAllNovels()
      .subscribe(res => this.$novels = res);
  }



}
