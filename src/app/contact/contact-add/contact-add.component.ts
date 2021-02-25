import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Contact } from 'src/app/models/contact';
import { addContact } from '../store/action/contact.actions';
import { ContactsBookState } from '../store/reducer/contact.reducer';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {
  addContact(newContact: { firstName: string; lastName: string; phone: string; address: string; email: string; }) {
    throw new Error('Method not implemented.');
  }

  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private store: Store<ContactsBookState>, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.dismissAll();
  }

  onSubmit() {
    const formValues = this.contactForm.value;
    const contact: Contact = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      phone: formValues.phone,
      address: formValues.address,
      email: formValues.email
    };
    this.store.dispatch(addContact(contact));
    this.close();
  }

}
