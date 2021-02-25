import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { selectContact } from '../store/action/contact.actions';
import { ContactsBookState } from '../store/reducer/contact.reducer';
import { selectContacts } from '../store/selector/contact.selectors';

@Component({
  selector: 'app-contacts-book',
  templateUrl: './contacts-book.component.html',
  styleUrls: ['./contacts-book.component.scss']
})
export class ContactsBookComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  constructor(private store: Store<ContactsBookState>, private modalService: NgbModal) { 
    this.contacts$ = this.store.pipe(select(selectContacts))
  }

  ngOnInit(): void {
  }

  selectContact(index){
    this.store.dispatch(selectContact({index}));
  }

  openModal (content) {
    this.modalService.open(content, {size: 'lg', centered: true});
  }

}
