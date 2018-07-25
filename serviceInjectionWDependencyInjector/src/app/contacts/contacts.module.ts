import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { PeopleService } from '../people/people.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactListComponent
  ],
  exports:[
    ContactListComponent
  ]
})
export class ContactsModule { }
