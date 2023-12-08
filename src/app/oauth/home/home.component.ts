import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'forbidden',
    templateUrl: 'home.component.html',
    standalone: true
})

export class HomeComponent implements OnInit {

    public message: string;
    public values?: any[];

    constructor() {
        this.message = "HomeComponent constructor";
    }
    
    ngOnInit() {
        
    }
}
