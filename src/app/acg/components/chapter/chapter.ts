import { Component, Input, OnInit } from "@angular/core";
import { IChapterCollection } from "src/app/gains/annotations/acg.interface";

@Component({
    selector: 'acg-chapter',
    templateUrl: './chapter.html',
    standalone: true
})
export class AcgChapter implements OnInit {
    @Input() chapter!: IChapterCollection;

    ngOnInit(){
        console.log('chapter', this.chapter)
    }
}