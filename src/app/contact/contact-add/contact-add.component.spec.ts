import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Contact } from 'src/app/models/contact';
import { ContactsBookState } from '../store/reducer/contact.reducer';

import { ContactAddComponent } from './contact-add.component';

describe('ContactAddComponent', () => {
  let mockStore: MockStore<ContactsBookState>;
  let component: ContactAddComponent;
  let fixture: ComponentFixture<ContactAddComponent>;
  let modalServiceSpy =  jasmine.createSpyObj('NgbModal', ['dismissAll']);

  const initialState = {
    contacts: [
      {lastName: 'Andrei', firstName: 'Maxi', phone: '2424325', address: 'sdbsf bfr', email: 'fcaevew@br'}
    ],
    selectedContact: new Contact(),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAddComponent ],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        {provide: NgbModal, useValue: modalServiceSpy},
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onSubmit method', async(() => {
    // Arrange
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    const element = fixture.debugElement.nativeElement.querySelector('#submit-btn');
    //Act
    element.click();
    //Assert
    expect(component.onSubmit).toHaveBeenCalled();
    expect(modalServiceSpy.dismissAll).toHaveBeenCalled();
  }))

  it('should add a contact after onSubmit was called', () => {
    //Arrange
    const dispatchSpy = spyOn(mockStore, 'dispatch').and.callThrough();
    component.onSubmit();
    //Act
    fixture.detectChanges();
    //Assert
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(modalServiceSpy.dismissAll).toHaveBeenCalled();
  });
});
