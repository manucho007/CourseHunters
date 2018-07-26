import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeesComponent} from './employees.component';
const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent
  },
];

// export const app_routing = RouterModule.forRoot(app_routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  providers: [],
  exports:[RouterModule]
})
export class EmployeesRoutingModule { }
