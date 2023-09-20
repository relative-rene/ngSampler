import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from '../application_services/modal.service';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[ModalService],
  exports:[ModalComponent]
})
export class UIModule { }
