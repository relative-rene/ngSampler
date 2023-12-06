import { Component, Input } from "@angular/core";
import { BackendErrorsInterface } from "../types/backendErrors.interface";
import { CommonModule } from "@angular/common";

@Component({
    selector:"backend-error-messages",
    templateUrl:'./backendErrors.component.html',
    standalone:true,
    imports:[CommonModule]
})

export class BackendErrorMessages {
    @Input() backendErrors:BackendErrorsInterface = {}
    errorMessages:string[]=[]

    ngOnInit():void{
        this.errorMessages = Object.keys(this.backendErrors).map((name:string)=>{
            const messages = this.backendErrors[name].join(' ');
            return `${name} ${messages}`
        })
    }
}