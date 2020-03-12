import { Validators } from '@angular/forms';
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
      type: 'text',
      validators: {
        required: true
      }
    },
    lastName: {
      value: 'Rodriguez',
      label: 'LastName',
      type: 'text'
    },
    age: {
      value: 27,
      label: 'Age',
      type: 'number',
      validators: { min: 18 }
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
    },
    gender: {
      value: 'M',
      type: 'radio',
      label: 'Gender',
      options: [
        {
          label: 'Male',
          value: 'M'
        },
        {
          label: 'Female',
          value: 'F'
        }
      ]
    }
  };
}
