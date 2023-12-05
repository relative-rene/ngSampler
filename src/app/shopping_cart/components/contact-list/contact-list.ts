import { Component } from '@angular/core';
import { ContactStore } from '../../store/store';
import { addContact } from '../../store/contact/contact.actions';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.html',
  styleUrls: ['./contact-list.css'],
})

export class ContactList {
	contactID: number;

	constructor(private store: ContactStore) {
		this.contactID = 0;
	}

  addContact(contact) {
    this.store.dispatch(addContact(contact, this.contactID++));
  }
}
