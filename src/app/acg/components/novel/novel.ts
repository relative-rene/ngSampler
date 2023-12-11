import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { INovelCollection } from "src/app/gains/annotations/acg.interface";



@Component({
    selector: 'acg-novel',
    templateUrl: './novel.html',
    standalone: true,
    imports: [CommonModule]
})
export class AcgNovel {
    @Input() novel!:INovelCollection;
    constructor(
        public router: Router,
        private route: ActivatedRoute) { }

    navigateTo(path: string, novel_id:string) {
        let completePath = path+novel_id;
        this.router.navigate([completePath], { relativeTo: this.route })
    }
}