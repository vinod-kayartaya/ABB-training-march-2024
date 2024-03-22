import { Component } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {

  public contacts: Array<Contact> = [];

  currentPageNum = 1;

  constructor(public service: ContactService) {}
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.service
      .getContacts(this.currentPageNum)
      .subscribe((data) => (this.contacts = data));
  }
  handleClickPrevious() {
    if (this.currentPageNum === 1) return;
    this.currentPageNum--;
    this.loadData();
  }
  handleClickNext() {
    this.currentPageNum++;
    this.loadData();
  }
}
