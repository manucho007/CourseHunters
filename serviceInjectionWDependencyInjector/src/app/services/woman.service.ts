import { Injectable } from '@angular/core';
import { PersonService } from '../person/person.service';

@Injectable()
export class WomanService extends PersonService{

  getPerson(){
    const person = super.getPerson();
    person.name = 'Katie';
    person.gender = "Female"
    return person;
  }
}
