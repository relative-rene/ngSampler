import { CommonModule } from "@angular/common";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ACGService } from "../../services/acg.service";
import { INovelCollection } from "src/app/gains/annotations/acg.interface";


@Component({
    selector: 'acg-novel',
    templateUrl: './novel.html',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class AcgNovel {
    @Input() novel!: INovelCollection;
    public options: IselectOptions[] | [] = [];
    public ChaptersLoaded: boolean = false;
    public myControl = new FormControl();
    constructor(
        public router: Router,
        public acgService: ACGService,
        private route: ActivatedRoute) { }

    navigateTo(novel_id: string) {
        this.router.navigate([novel_id], { relativeTo: this.route })
    }

    getChapters(novel_id: string) {
        console.log('novel_id', novel_id)
        this.acgService.getChaptersList(novel_id)
            .subscribe((data: any[]) => this.options = sortData(data))
    }

    onSelect(selected: Event, novel_id: string) {
        if (selected.currentTarget) {
            let path = novel_id + '/' + selected.currentTarget['value'];
            this.router.navigate([path], { relativeTo: this.route })
        }
    }
}

const sortData = (d) => {
    return d.sort((a, b) => {
        return Number(a.description.split(' ')[1]) - Number(b.description.split(' ')[1])
    })
}

export interface IselectOptions {
    description: string;
    _id: string;
}