import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {
  constructor() {  }
  name='Juri';

  getPerson():any{
    return{
      name:this.name,
      age:31
    };
  }
  setPersonName(value){
    this.name = value;
  }
}
