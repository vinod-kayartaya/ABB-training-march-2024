import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent {
  @Input() // value for this variable comes from the parent
  contact: Contact = new Contact();

  @Output()
  deleted = new EventEmitter<string>();

  constructor(private service: ContactService) {}

  deleteThisContact() {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.service
        .deleteContact(this.contact.id || -1)
        .subscribe(() => this.deleted.emit('deleted'));
    }
  }
}
