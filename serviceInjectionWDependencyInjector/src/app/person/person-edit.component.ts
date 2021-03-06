import { Component, OnInit } from '@angular/core';
import { PersonService} from './person.service';

@Component({
  selector: 'person-edit',
  template: `
  <pre>{{personService.getPerson() | json}}</pre>
  <br>
  <input type="text" #personName>
  <button (click)="setPerson(personName.value)">Save</button>
  `,
  styles:[]
})
export class PersonEditComponent implements OnInit {
  constructor(public personService:PersonService) { }

  ngOnInit() { }

  setPerson(value:string){
    this.personService.setPersonName(value);
  }
}
