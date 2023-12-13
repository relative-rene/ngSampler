import { Component, inject } from "@angular/core";
import { IChapterCollection } from "src/app/gains/annotations/acg.interface";
import { AcgChapter } from "../chapter/chapter";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { ACGService } from '../../services/acg.service';
import { InfiniteScrollDirective } from "src/app/directives/infiniteScroll.directive";

@Component({
    selector: 'acg-chapters',
    templateUrl: './chapters.html',
    standalone: true,
    imports: [AcgChapter, CommonModule, InfiniteScrollDirective]
})
export class AcgChapters {
    chapters!: IChapterCollection[];

    private readonly route: ActivatedRoute = inject(ActivatedRoute);
    constructor(private acgService: ACGService) {
    }

    ngOnInit() {
        this.route.data.subscribe(({data}) => this.chapters = data);
    }

    loadMoreChapters() {
        if (this.chapters.length) {
            let currentChapter = this.chapters.slice(-1)[0];
            let chapterNumber = 'Chapter ' + (Number(currentChapter.description.split(' ')[1]) + 1);
            this.acgService.getChapter(currentChapter.novel_id, chapterNumber).subscribe(res => this.chapters.push(res[0]))
            console.log('loadMoreChapters')

        }
    }
}