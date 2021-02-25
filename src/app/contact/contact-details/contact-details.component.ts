import { Component, OnInit } from '@angular/core';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactsBookState } from '../store/reducer/contact.reducer';
import { selectContact } from '../store/selector/contact.selectors';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact$: Observable<Contact>;

  constructor(private store: Store<ContactsBookState>) { 
    this.contact$ = this.store.pipe(select(selectContact));
  }

  ngOnInit(): void {
  }

}
