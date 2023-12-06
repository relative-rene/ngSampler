import { Component, Input } from "@angular/core";
import { BackendErrorsInterface } from "../types/backendErrors.interface";

@Component({
    selector:"backend-error-messages",
    templateUrl:'./backendErrors.component.html',
    standalone:true
})

export class BackendErrorMessages {
    @Input() backendErrors:BackendErrorsInterface = {}
    errorMessage:string[]=[]

    ngOnInit():void{
        this.errorMessage = Object.keys(this.backendErrors).map((name:string)=>{
            const messages = this.backendErrors[name].join(' ');
            return `${name} ${messages}`
        })
    }
}