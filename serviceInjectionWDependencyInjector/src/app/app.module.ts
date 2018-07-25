import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PeopleModule } from './people/people.module';
import { PersonModule } from './person/person.module';
import { PersonComponent } from './person/person.component';
import { ContactsModule } from './contacts/contacts.module';

import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ChildComponent } from './child.component';

import {LoggerService} from './services/logger.service';
import {NewLoggerService} from './services/new-logger.service';
@NgModule({
  declarations: [
    AppComponent,
    // ContactListComponent
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PeopleModule,
    ContactsModule,
    PersonModule,

  ],
  providers: [
    NewLoggerService,
    // Use of Alias so we call from app old service and use New Service instead
    {provide:LoggerService,useExisting:NewLoggerService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
