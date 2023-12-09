import { Component, Input } from "@angular/core";
import { AppModule } from "src/app/app.module";



@Component({
    selector: 'acg-novel',
    templateUrl: './novel.html',
    standalone: true,
    imports: [AppModule]

})
export class AcgNovel {
    @Input() novel;
}