import { ContactsComponent } from './contacts.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: ContactsComponent }];
export default RouterModule.forChild(routes);
