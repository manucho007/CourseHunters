import { Component, OnInit } from '@angular/core';
import {PeopleService} from './people.service';
@Component({
  selector: 'app-people-list',
  template: `
    <ul *ngFor="let name of names">
      <li>{{name.name}}</li>
    </ul>
    <input type="text" name="name" [(ngModel)]="newName">
    <button (click)="addPerson()">Ingresar</button>
  `,
})
export class PeopleListComponent implements OnInit {
  constructor(private people:PeopleService) {  }
names;
newName;
  ngOnInit() {
    this.names = this.people.getPeople();
  }
  addPerson(){
    this.people.addPerson(this.newName);
    this.newName = null;
  }
}
