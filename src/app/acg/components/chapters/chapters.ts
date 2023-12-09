import { Component } from "@angular/core";
import { IChapterCollection } from "src/app/gains/annotations/acg.interface";
import { AcgChapter } from "../chapter/chapter";
import { AppModule } from "src/app/app.module";
import { ACGService } from "../../services/acg.service";

@Component({
    selector: 'acg-chapters',
    templateUrl: './chapters.html',
    standalone: true,
    imports: [AcgChapter, AppModule],
    providers: [ACGService]

})
export class AcgChapters {
    chapters?: IChapterCollection[] | undefined;
    constructor(public acgService: ACGService) { }
}