import { Component, inject } from "@angular/core";
import { IChapterCollection } from "src/app/gains/annotations/acg.interface";
import { AcgChapter } from "../chapter/chapter";
import { CommonModule } from "@angular/common";
import { Observable, map } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'acg-chapters',
    templateUrl: './chapters.html',
    standalone: true,
    imports: [AcgChapter,CommonModule]
})
export class AcgChapters {
    chapters$!: Observable<IChapterCollection[] | null>;

    private readonly route: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit() {
        this.chapters$ = this.route.data.pipe(map(({data}) => data))
        console.log(this.chapters$)
    }
}