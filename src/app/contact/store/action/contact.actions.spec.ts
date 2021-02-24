import * as fromContact from './contact.actions';

describe('addContact', () => {
  it('should return an action', () => {
    expect(fromContact.addContact.type).toBe('[Contact] Add Contact');
  });
});
