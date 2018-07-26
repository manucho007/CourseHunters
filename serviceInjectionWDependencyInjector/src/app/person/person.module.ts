import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonService } from './person.service';
import { PersonEditComponent } from './person-edit.component';
import { PersonComponent } from './person.component';
import { NewPersonComponent } from './new-person.component';
@NgModule({
  imports: [CommonModule],
  declarations: [
    PersonEditComponent,
    PersonComponent,
    NewPersonComponent
  ],
  providers: [PersonService],
  exports: [
    PersonEditComponent,
    PersonComponent,
    NewPersonComponent
  ]
})
export class PersonModule { }
