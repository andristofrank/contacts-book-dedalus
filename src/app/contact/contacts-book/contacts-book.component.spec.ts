import { Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { reducers } from 'src/app/reducers';
import { selectContact } from '../store/action/contact.actions';
import { ContactsBookState } from '../store/reducer/contact.reducer';
import { selectorContactsSummary } from '../store/selector/contact.selectors';
import { ContactsBookComponent } from './contacts-book.component';

describe('ContactsBookComponent', () => {
  let mockStore: MockStore<ContactsBookState>;
  let component: ContactsBookComponent;
  let fixture: ComponentFixture<ContactsBookComponent>;
  let modalServiceSpy =  jasmine.createSpyObj('NgbModal', ['open']);
  const initialState = {
    contacts: [
      {lastName: 'Andrei', firstName: 'Maxi', phone: '2424325', address: 'sdbsf bfr', email: 'fcaevew@br'}
    ],
    selectedContact: new Contact(),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsBookComponent ],
      providers: [
        provideMockStore({initialState, selectors: [
          { selector: selectorContactsSummary, value:
            [{lastName: 'Andrei', firstName: 'Maxi'},
          {lastName: 'Andrei', firstName: 'Maxi'}]}
        ]}),
        {provide: NgbModal, useValue: modalServiceSpy}
      ]
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.contacts$).toBeInstanceOf(Observable);
  });

  it('should have the initial state rows of data of 2 elements', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
  });

  it('should select a contact when selectContact is called', () => {
    //Arrange
    const dispatchSpy = spyOn(mockStore, 'dispatch').and.callThrough();
    const index = 0;
    component.selectContact(index);
    //Act
    fixture.detectChanges();
    //Assert
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });

  it('should open addContactmodal when add button is clicked', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('#add-button');
    button.click();
    fixture.detectChanges();
    expect(modalServiceSpy.open).toHaveBeenCalled();
  });
});
