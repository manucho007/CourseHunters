import { Component } from '@angular/core';
import { PeopleService } from './people/people.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people;
  childVisible =true;
  constructor(private peopleService:PeopleService){
    // With the service in the providers we forget the nest line
    // and call the service from the constructor
      // const peopleService = new PeopleService();
    this.people = peopleService.getPeople();
  }
}
