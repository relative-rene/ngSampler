export interface IContactAction {
  type: string;
  id: number;
  name?: string;
}

export function addContact(name: string, id: number): IContactAction {
  return {
    type: 'ADD',
    id,
    name
  };
}

export function removeContact(id: number): IContactAction {
  return Object.assign({
    type: 'REMOVE',
    id
  });
}

export function starContact(id: number): IContactAction {
  return {
    type: 'STAR',
    id
  };
}

export function init(id: number): IContactAction {
  return {
    type: 'INIT',
    id
  };
}