import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contact: Contact = new Contact();

  constructor(private service: ContactService, private router: Router){}

  saveData() {
    this.service.addNewContact(this.contact).subscribe(
      resp => this.router.navigate(['/contact-details', resp.id])
    )
  }


}
