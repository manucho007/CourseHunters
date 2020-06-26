import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  template: `
    <div *ngFor="let contact of contacts$ | async; index as i">
      <a [routerLink]="i + 1">{{ contact.name }}</a>
    </div>
  `,
})
export class ContactsComponent {
  contacts$;
  constructor(private http: HttpClient) {
    this.contacts$ = http
      .get('https://swapi.dev/api/people/')
      .pipe(map((res) => res['results']));
  }
}
