import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(this.loadData);
  }

  loadData = (params: any) => {
    console.log(params);
    let id = parseInt(params['id']);
    this.service.getContactById(id).subscribe((data) => (this.contact = data));
  };

  confirmAndDelete() {
    if (confirm('Are you sure to delete this contact?')) {
      this.service
        .deleteContact(this.contact.id || -1)
        .subscribe(() => this.router.navigate(['/']));
    }
  }
}
