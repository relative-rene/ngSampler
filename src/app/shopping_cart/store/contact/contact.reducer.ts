import { IContactAction } from './contact.actions';
import { Contact as ContactModel} from '../store';

export function reducer(state: Array<ContactModel> = Array<ContactModel>(), action: IContactAction) {
  switch (action.type) {
    case 'ADD':
      return state.push({
        id: action.id,
        name: action.name,
        star: false
      });
    case 'REMOVE':
      return delete state[action.id].id
    case 'STAR':
      return (<any>state).update(findIndexById(), (contact) => {
        return {
          id: contact.id,
          name: contact.name,
          star: !contact.star
        };
      });
    default:
      return state;
  }

  function findIndexById() {
    return state.findIndex((contact) => contact.id === action.id);
  }
}