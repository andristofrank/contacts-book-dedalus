import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsBookComponent } from './contacts-book/contacts-book.component';
import { StoreModule } from '@ngrx/store';
import { contactFeatureKey, reducer } from './store/reducer/contact.reducer';



@NgModule({
  declarations: [ContactsBookComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(contactFeatureKey, reducer)
  ],
  exports: [ContactsBookComponent]
})
export class ContactModule { }
