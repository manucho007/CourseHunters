import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Reactive forms</h1>
    <app-dynamic-form [formDataObj]="person"></app-dynamic-form>
  `,
  styles: []
})
export class AppComponent {
  person = {
    firstName: {
      value: 'Manuel',
      label: 'FirstName',
      type: 'text'
    },
    lastName: {
      value: 'Rodriguez',
      label: 'LastName',
      type: 'text'
    },
    age: {
      value: 27,
      label: 'Age',
      type: 'number'
    },
    city: {
      value: 'NY',
      label: 'City',
      type: 'select',
      options: [
        { label: '(Choose one)', value: '' },
        { label: 'New York', value: 'NY' },
        { label: 'Los Angeles', value: 'LA' }
      ]
    }
  };
}
