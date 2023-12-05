import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { ContactStore, Contact as ContactModel} from '../../store/store';
import { removeContact, starContact } from '../../store/contact/contact.actions';

@Component({
  selector: 'contact',
  templateUrl:'./contact.html',
  styleUrls: ['contact.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export default class ContactComponent {
  @Input() contact!: ContactModel;

  constructor(private store: ContactStore) { }

  removeContact(contact) {
    this.store.dispatch(removeContact(contact.id));
  }

  starContact(contact) {
    this.store.dispatch(starContact(contact.id));
  }
}
