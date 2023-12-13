import { Component, Input, OnInit } from "@angular/core";
import { InfiniteScrollDirective } from "src/app/directives/infiniteScroll.directive";
import { IChapterCollection } from "src/app/gains/annotations/acg.interface";

@Component({
    selector: 'acg-chapter',
    templateUrl: './chapter.html',
    standalone: true,
    imports:[InfiniteScrollDirective]
})
export class AcgChapter {
    @Input() chapter!: IChapterCollection;
    constructor(){}
}