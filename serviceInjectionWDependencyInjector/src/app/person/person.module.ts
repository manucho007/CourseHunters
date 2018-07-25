import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonService } from './person.service';
import { PersonEditComponent} from './person-edit.component';
import {PersonComponent} from './person.component';
@NgModule({
  imports: [CommonModule],
  declarations: [
    PersonEditComponent,
    PersonComponent
  ],
  providers: [PersonService],
  exports:[
    PersonEditComponent,
    PersonComponent
  ]
})
export class PersonModule { }
