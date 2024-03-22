import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';

const baseUrl = 'http://localhost:5000/contacts/';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  public getContacts(
    pageNo: number = 1,
    pageLimit: number = 15
  ): Observable<any> {
    const options = { params: { _page: pageNo, _limit: pageLimit } };
    return this.http.get(baseUrl, options);
  }

  getContactById(id: number): Observable<any> {
    return this.http.get(baseUrl + id);
  }

  public deleteContact(id: number): Observable<any> {
    return this.http.delete(baseUrl + id);
  }

  addNewContact(contact: Contact): Observable<any> {
    return this.http.post(baseUrl, contact);
  }
}
