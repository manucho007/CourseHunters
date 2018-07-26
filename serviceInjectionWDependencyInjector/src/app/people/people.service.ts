import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService{
  constructor(){}
people=[
  {
    name:'Manuel'
  },
  {
    name:'Andres'
  },
  {
    name:'Leonardo'
  }
]
  getPeople(){
    return this.people;
  }

  addPerson(name){
    this.people.push({
      name
    });
  }
}
