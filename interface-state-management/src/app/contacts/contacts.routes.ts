import { ContactsComponent } from './contacts.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: '', component: ContactsComponent },
  { path: ':id', component: ContactComponent },
];
export default RouterModule.forChild(routes);
