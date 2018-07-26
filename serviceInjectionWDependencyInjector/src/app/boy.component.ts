import { Component, OnInit } from '@angular/core';
import { PersonService } from './person/person.service';
@Component({
  selector: 'app-boy',
  template: `
    <h3>Regular</h3>
    <pre>{{person | json}}</pre>
  `,
})
export class BoyComponent implements OnInit {
  person;

  constructor(private people:PersonService) { }

  ngOnInit() {
    this.person = this.people.getPerson();
   }
}
