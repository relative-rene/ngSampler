import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from '../../../application_services/modal.service';
import { transition, style, animate, trigger, state } from '@angular/animations';

// const enterTransition = transition(':enter', [
//     style({
//         translateY: '-100vh',
//     }),
//     animate('1s ease-out', style({ translateY: 0 }))
// ])
// const exitTransition = transition(':leave', [
//     style({
//         translateY:0,
//     }),
//     animate('1s ease-in', style({translateY:'-100vh'}))
// ])
// const slideIn = trigger('slideIn', [enterTransition]);
// const slideOut = trigger('slideOut', [exitTransition]);

const slideInOut = trigger('slideInOut', [
    state('open',
        style({
            translateY: 0
        })),
    state('close', style({
        translateY: '-100vh'
    })),
    transition('close => open', [animate('3s ease-in')]),
    transition('open => close', [animate('3s ease-out')]),
])
@Component({
    selector: 'modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.scss'],
    animations: [slideInOut],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id?: string;
    @Input() isVisible!: boolean;
    isOpen = false;
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit() {
        // add self (this modal instance) to the modal service so it can be opened from any component
        this.modalService.add(this);

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', (el: any) => {
            if (el.target.className === 'modal') {
                this.close();
            }
        });
    }

    ngOnDestroy() {
        // remove self from modal service
        this.modalService.remove(this);

        // remove modal element from html
        this.element.remove();
        this.isVisible = false;
    }

    open() {
        this.element.style.display = 'block';
        document.body.classList.add('modal-open');
        this.isVisible = true;
        this.isOpen = true;
    }

    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
        this.isOpen = false;
        this.isVisible = false;
    }
}