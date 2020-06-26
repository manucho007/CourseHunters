import { HomeComponent } from './home/home.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./home/home.module`).then((m) => m.HomeModule),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import(`./contacts/contacts.module`).then((m) => m.ContactsModule),
  },
];
export default RouterModule.forRoot(routes);
