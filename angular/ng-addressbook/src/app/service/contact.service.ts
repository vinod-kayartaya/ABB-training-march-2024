import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  public deleteContact(id: number): Observable<any> {
    return this.http.delete(baseUrl + id);
  }
}
