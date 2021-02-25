import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsBookComponent } from './contacts-book/contacts-book.component';
import { StoreModule } from '@ngrx/store';
import { contactFeatureKey, reducer } from './store/reducer/contact.reducer';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './contact-details/contact-details.component';



@NgModule({
  declarations: [ContactsBookComponent, ContactAddComponent, ContactDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(contactFeatureKey, reducer)
  ],
  exports: [ContactsBookComponent]
})
export class ContactModule { }
