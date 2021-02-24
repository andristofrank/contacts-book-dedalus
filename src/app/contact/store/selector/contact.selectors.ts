import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContact from '../reducer/contact.reducer';

export const selectContactsBookState = createFeatureSelector<fromContact.ContactsBookState>(
    fromContact.contactFeatureKey
);

export const selectContacts = createSelector(
    selectContactsBookState,
    (state: fromContact.ContactsBookState) => state.contacts
);
