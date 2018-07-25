import { Component, OnInit } from '@angular/core';
import { PersonService } from './person/person.service';
@Component({
  selector: 'app-child',
  template: `
    <h3>Child Component</h3>
    <pre>{{personService.getPerson() | json}}</pre>
    <person-edit></person-edit>
  `,
  // Defining in the provider the PersonService,
  // It won't be the same as the global PersonService
  // This service lifetime is bounded to this component
  providers:[PersonService]
})
export class ChildComponent implements OnInit {
  constructor(public personService: PersonService) {  }

  ngOnInit() {}

}
