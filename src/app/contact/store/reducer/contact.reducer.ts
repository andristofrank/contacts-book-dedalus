import { Action, createReducer, on } from '@ngrx/store';
import * as ContactActions from '../action/contact.actions';
import { Contact } from 'src/app/models/contact';


export const contactFeatureKey = 'contact';

export interface ContactsBookState {
  contacts: Contact[];
}

export const initialState: ContactsBookState = {
  contacts: [
    {lastName: 'Andrei', firstName: 'Maxi', phone: '2424325', address: 'sdbsf bfr', email: 'fcaevew@br'}
  ]
};


export const contactReducer = createReducer(
  initialState,
  on(ContactActions.addContact, 
      (state: ContactsBookState, {contact}) =>
      {
        const contacts = [...state.contacts, contact];
        return {...state, contacts};
      }
    )
);

export function reducer(state: ContactsBookState | undefined, action: Action): any {
  return contactReducer(state, action);
}
