import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PeopleModule } from './people/people.module';
import { PersonModule } from './person/person.module';
import { PersonComponent } from './person/person.component';
import { ContactsModule } from './contacts/contacts.module';

import { ChildComponent } from './child.component';

import {LoggerService} from './services/logger.service';
import {NewLoggerService} from './services/new-logger.service';

// instead of creating a service we can do the same creating an object
const simpleLogger={
  log(msg:string){
    console.log(`I'm a simple logger: ${msg}`)
  }
}
// We define the factory and pass value into service
const loggerFactory=()=>{
  return new NewLoggerService(true);
}
@NgModule({
  declarations: [
    AppComponent,
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
    // Regular logger service
      // LoggerService,
    //We use a factory to pass a value and have more control over the service
    {provide:NewLoggerService, useFactory:loggerFactory},
    // Use of Alias so we call from app old service and use New Service instead
      {provide:LoggerService,useExisting:NewLoggerService},
    // We'll use the Object instead of the services
      // {provide:LoggerService, useValue:simpleLogger}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
