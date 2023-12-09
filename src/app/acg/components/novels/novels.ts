import { Component } from "@angular/core";
import { AcgNovel } from "../novel/novel";
import { ACGService } from "../../services/acg.service";
import { INovelCollection } from "src/app/gains/annotations/acg.interface";
import { AppModule } from "src/app/app.module";

@Component({
    selector: 'acg-novels',
    templateUrl: './novels.html',
    standalone: true,
    imports: [AppModule, AcgNovel]
})

export class AcgNovels {
    novels?: INovelCollection[] | undefined;
    constructor(public acgService: ACGService) {
    }

}