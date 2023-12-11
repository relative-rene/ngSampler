import { Component } from "@angular/core";
import { IChapterCollection } from "src/app/gains/annotations/acg.interface";
import { AcgChapter } from "../chapter/chapter";
import { ACGService } from "../../services/acg.service";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
    selector: 'acg-chapters',
    templateUrl: './chapters.html',
    standalone: true,
    imports: [AcgChapter, CommonModule, HttpClientModule],
    providers: [ACGService]
})
export class AcgChapters {
    chapters?: IChapterCollection[] | undefined;
    constructor(public acgService: ACGService) { }
}