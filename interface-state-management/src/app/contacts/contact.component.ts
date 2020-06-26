import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, startWith, subscribeOn } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'contact',
  template: `
    <h2>Name {{ (contact$ | async)?.name }}</h2>
    <h2>Gender {{ (contact$ | async)?.gender }}</h2>
  `,
})
export class ContactComponent {
  contact$ = new BehaviorSubject({ name: '', image: '' });
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    route.params
      .pipe(
        map((p: any) => p.id),
        switchMap((id) => http.get('https://swapi.dev/api/people/' + id + '/'))
      )
      .subscribe(this.contact$);
  }
}
