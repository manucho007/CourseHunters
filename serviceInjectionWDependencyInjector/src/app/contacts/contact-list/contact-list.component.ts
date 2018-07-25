import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../people/people.service';
@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private peopleService:PeopleService) {
    console.log(this.peopleService.getPeople());
   }

  ngOnInit() {
  }

}
