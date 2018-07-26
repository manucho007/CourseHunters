import { Component, OnInit } from '@angular/core';
import { PersonService } from './person/person.service';
import { WomanService } from './services/woman.service';
@Component({
  selector: 'app-woman',
  template: `
    <h3>Overridden</h3>
    <pre>{{person | json}}</pre>
  `,
  providers: [
    {
      provide: PersonService,
      useClass: WomanService
    }
  ]
})
export class WomanComponent implements OnInit {
  person;
  constructor(private people: PersonService) { }

  ngOnInit() {
    this.person = this.people.getPerson();
  }
}
