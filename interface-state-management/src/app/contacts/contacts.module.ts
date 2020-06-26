import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import ContactsRoutes from './contacts.routes';
import { ContactComponent } from './contact.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [CommonModule, ContactsRoutes, HttpClientModule],
  declarations: [ContactsComponent, ContactComponent],
})
export class ContactsModule {}
