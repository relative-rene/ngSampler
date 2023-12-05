import { createStore } from 'redux';
import { IContactAction, init } from './contact/contact.actions';
import { reducer } from './contact/contact.reducer';

export class Contact {
  id?: number;
  name?: string;
  star?: boolean;
}

export class ContactStore {
  store = createStore(reducer([{}], init(0)));

  get contacts(): Array<Contact>| unknown {
    return this.store.getState();
  }

  dispatch(action: IContactAction) {
    this.store.dispatch(action);
  }
}