import { createAction, props } from '@ngrx/store';
import { Contact } from 'src/app/models/contact';

export const addContact = createAction(
  '[Contact] Add Contact',
  (contact: Contact) => ({contact})
);




