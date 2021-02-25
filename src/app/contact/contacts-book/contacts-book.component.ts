import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContactSummary } from 'src/app/models/contact';
import { selectContact } from '../store/action/contact.actions';
import { ContactsBookState } from '../store/reducer/contact.reducer';
import { selectorContacts, selectorContact, selectorContactsSummary } from '../store/selector/contact.selectors';

@Component({
  selector: 'app-contacts-book',
  templateUrl: './contacts-book.component.html',
  styleUrls: ['./contacts-book.component.scss']
})
export class ContactsBookComponent implements OnInit {
  contacts$: Observable<ContactSummary[]>;
  selectedIndex: number;
  constructor(private store: Store<ContactsBookState>, private modalService: NgbModal) { 
    this.contacts$ = this.store.pipe(select(selectorContactsSummary));
  }

  ngOnInit(): void {
  }

  selectContact(index){
    this.store.dispatch(selectContact({index}));
    this.selectedIndex = index;
  }

  openModal (content) {
    this.modalService.open(content, {size: 'lg', centered: true});
  }
}
