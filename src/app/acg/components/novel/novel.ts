import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ACGService } from "../../services/acg.service";



@Component({
    selector: 'acg-novel',
    templateUrl: './novel.html',
    standalone: true,
    imports: [CommonModule],
    providers: [ACGService]

})
export class AcgNovel {
    constructor(
        public router: Router,
        public acgService: ACGService,
        private route: ActivatedRoute) { }
    @Input() novel;

    navigateTo(path: string, novel_id: string) {
        this.acgService.getAllChaptersFromNovel(novel_id);
        this.router.navigate([path],{ relativeTo: this.route })
    }
}