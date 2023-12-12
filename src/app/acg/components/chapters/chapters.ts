import { Component, HostListener, inject } from "@angular/core";
import { IChapterCollection } from "src/app/gains/annotations/acg.interface";
import { AcgChapter } from "../chapter/chapter";
import { CommonModule } from "@angular/common";
import { Observable, merge, map } from "rxjs";
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

    chapters$!: Observable<IChapterCollection[] | null>;
    currentChapter;
    novel;

    private readonly route: ActivatedRoute = inject(ActivatedRoute);
    constructor(private acgService: ACGService) { }

    ngOnInit() {
        this.chapters$ = this.route.data.pipe(map(({ data }) => data))
    }
    loadMoreChapters(){
        this.chapters$.subscribe((res)=>{
            if(res){
                this.currentChapter = res.slice(-1);
                console.log(this.currentChapter)
            }
        })
        // let newChapter$ = this.acgService.getChapter(this.novel,this.currentChapter);
        // this.chapters$  = merge(this.chapters$,newChapter$);
        console.log('bottom')
    }
}