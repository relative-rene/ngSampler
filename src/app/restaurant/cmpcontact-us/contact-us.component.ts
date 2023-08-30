import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../_services/message.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html'
})

export class ContactUsComponent implements OnInit {
  public messageForm: FormGroup;
  
  constructor(
    private messageService: MessageService) { }

  /**
   * Lifecycle hook creates component form
   */
  ngOnInit() {
    this.initForm();
  }

  /**
   * Eventhandler executes MessageService addMessage method & resets form.
   */
  onSubmit() {
    this.messageService.addMessage(this.messageForm.value);
    this.initForm();
  }

  private initForm() {
    let messageEmail = '';
    let messageDescription = '';
    this.messageForm = new FormGroup({
      'email': new FormControl(messageEmail, Validators.required),
      'description': new FormControl(messageDescription, Validators.required)
    });
  }
}
