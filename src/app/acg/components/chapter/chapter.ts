import { Component, Input } from "@angular/core";
import { IChapterCollection } from "src/app/gains/annotations/acg.interface";
import { ACGService } from "../../services/acg.service";

@Component({
    selector: 'acg-chapter',
    templateUrl: './chapter.html',
    standalone: true,
    providers: [ACGService]
})

export class AcgChapter {
    @Input() chapter?: IChapterCollection;
    constructor(public acgService: ACGService) { }
}