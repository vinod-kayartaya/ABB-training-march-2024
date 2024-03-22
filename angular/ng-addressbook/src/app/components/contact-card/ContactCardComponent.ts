import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Confirm',
      text: 'Sure about deletion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteContact();
      }
    });
  }
  private deleteContact() {
    this.service.deleteContact(this.contact.id || -1).subscribe(() => {
      this.deleted.emit('deleted');
      Swal.fire({
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        icon: 'success',
      });
    });
  }
}
