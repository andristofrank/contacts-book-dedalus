import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsBookComponent } from './contacts-book.component';

describe('ContactsBookComponent', () => {
  let component: ContactsBookComponent;
  let fixture: ComponentFixture<ContactsBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
