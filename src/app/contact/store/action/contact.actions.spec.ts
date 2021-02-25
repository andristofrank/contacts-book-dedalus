import * as fromContact from './contact.actions';

describe('addContact', () => {
  it('should return an action', () => {
    expect(fromContact.addContact.type).toBe('[Contact] Add Contact');
  });
});

describe('selectContact', () => {
  it('should return an action', () => {
    // console.log(fromContact.selectContact);
    expect(fromContact.selectContact.type).toBe('[Contact] Select Contact');
  });
});