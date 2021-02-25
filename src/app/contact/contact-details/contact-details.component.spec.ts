import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Contact } from 'src/app/models/contact';
import { ContactsBookState } from '../store/reducer/contact.reducer';
import { selectorContact, selectorContactsSummary } from '../store/selector/contact.selectors';

import { ContactDetailsComponent } from './contact-details.component';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;
  let mockStore: MockStore<ContactsBookState>;

  const initialState = {
    contacts: [
      {lastName: 'Andrei', firstName: 'Maxi', phone: '2424325', address: 'sdbsf bfr', email: 'fcaevew@br'}
    ],
    selectedContact: new Contact(),
  }

  let modalServiceSpy =  jasmine.createSpyObj('NgbModal', ['dismissAll']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailsComponent ],
      providers: [
        provideMockStore({initialState, selectors: [
          { selector: selectorContact,
            value: [{lastName: 'Andrei', firstName: 'Maxi', phone: '2424325', address: 'sdbsf bfr', email: 'fcaevew@br'}]}
        ]}),
        {provide: NgbModal, useValue: modalServiceSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
