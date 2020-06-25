import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeComponent }];
export default RouterModule.forChild(routes);
