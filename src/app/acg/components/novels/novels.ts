import { Component } from "@angular/core";
import { AcgNovel } from "../novel/novel";
import { ACGService } from "../../services/acg.service";
import { INovelCollection } from "src/app/gains/annotations/acg.interface";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'acg-novels',
    templateUrl: './novels.html',
    standalone: true,
    imports: [CommonModule, AcgNovel]
})

export class AcgNovels {
    novels?: INovelCollection[] | undefined;
    constructor(public acgService: ACGService) { }

 

}