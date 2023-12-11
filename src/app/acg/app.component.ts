import { ACGService } from './services/acg.service';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AcgNovels } from './components/novels/novels';
import { AcgNovel } from './components/novel/novel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'acg',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, AcgNovels, AcgNovel],
  providers: [ACGService]
})
export class ACGComponent {

  constructor(public acgService: ACGService) {

    // last update was chapter 565
    // this.acgService.updateChapter("655d4893e832453ca4e1b192",data).subscribe(res=> console.log('we printed', res))

  }
}
