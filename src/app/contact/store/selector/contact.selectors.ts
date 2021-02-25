import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContact from '../reducer/contact.reducer';

export const selectContactsBookState = createFeatureSelector<fromContact.ContactsBookState>(
    fromContact.contactFeatureKey
);

export const selectorContacts = createSelector(
    selectContactsBookState,
    (state: fromContact.ContactsBookState) => {
        return state.contacts
    }
);
export const selectorContactsSummary = createSelector(
    selectContactsBookState,
    (state: fromContact.ContactsBookState) => state.contacts.map(contact => 
        ({firstName: contact.firstName,
        lastName: contact.lastName})
        )
);
export const selectorContact = createSelector(
    selectContactsBookState,
    (state: fromContact.ContactsBookState) => state.selectedContact
);
