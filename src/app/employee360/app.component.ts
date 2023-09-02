import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'employee360',
    template: '<router-outlet></router-outlet>',
})
export class Employee360Component implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((e) => {
            if (!(e instanceof NavigationEnd)) {
                return;
            }
            document.body.scrollTop = 0;
        });
    }
}
