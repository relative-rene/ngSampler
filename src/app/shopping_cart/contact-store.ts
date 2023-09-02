import { createStore } from 'redux';
import { IContactAction } from './actions';
import { reducer } from './reducer';

export class Contact {
  id?: number;
  name?: string;
  star?: boolean;
}

export class ContactStore {
  store = createStore(reducer, Array<Contact);

  get contacts(): Array<Contact> {
    return this.store.getState();
  }

  dispatch(action: IContactAction) {
    this.store.dispatch(action);
  }
}