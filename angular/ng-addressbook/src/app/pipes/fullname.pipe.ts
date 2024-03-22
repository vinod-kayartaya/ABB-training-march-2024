import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact';
// ng g p pipes/fullname --skip-tests
@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(contact: Contact): string {
    const title = contact.gender === 'Male' ? 'Mr.' : 'Ms.';
    return `${title} ${contact.firstname} ${contact.lastname}`;
  }
}
