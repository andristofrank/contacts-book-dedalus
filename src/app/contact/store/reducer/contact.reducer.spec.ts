import { addContact, selectContact } from '../action/contact.actions';
import * as fromReducer from './contact.reducer';

describe('Contact Reducer', () => {
  describe('an unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };

      const resultState = fromReducer.reducer(initialState, action);

      expect(resultState).toBe(initialState);
    });
  });

  describe('addContact action', () => {
    it('should add a new contact and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const contact = {firstName: 'Elena', lastName: 'Somescu', phone: '2424325', address: 'Marsalle 37', email: 'brew@br.dk'};
      const action = addContact(contact);
      const resultState = fromReducer.reducer(initialState, action);

      expect(resultState).not.toBe(initialState);
      expect(resultState.contacts.length).toEqual(2);
    })
  })

  describe('selectContact action', () => {
    it('should select a contact from the list of registered contacts', () => {
      const { initialState } = fromReducer;
      const index = 1;
      const action = selectContact({index});
      const resultState = fromReducer.reducer(initialState, action);
      expect(resultState.contacts[0]).toEqual(initialState.contacts[0]);
    })
  })
});

