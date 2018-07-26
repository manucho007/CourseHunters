import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyRoute',
  template: `
    <h1>Employees Route</h1>
    <app-people-list></app-people-list>
  `,
})
export class EmployeesComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}
}
