import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Reactive forms</h1>
    <app-dynamic-form
      [data]="person"
      [formDataObj]="personFields"
    ></app-dynamic-form>
  `,
  styles: []
})
export class AppComponent {
  person = {
    firstName: 'Manuel',
    age: 27,
    gender: 'M'
  };
  // Optimized for FORMLY
  personFields = [
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        label: 'First Name'
      },
      validators: {
        validation: Validators.required
      },
      validation: {
        messages: {
          required: 'You need to provide a value'
        }
      }
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        label: 'Last Name'
      },
      validators: {
        validation: Validators.required
      },
      validation: {
        messages: {
          required: 'You need to provide a value'
        }
      }
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        label: 'Age',
        type: 'number'
      },
      validators: {
        validation: Validators.min(18)
      },
      validation: {
        messages: {
          min: 'Needs to be at least 18'
        }
      }
    },
    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        label: 'gender',
        options: [
          { value: 'Male', key: 'M' },
          { value: 'Female', key: 'F' }
        ]
      }
    }
  ] as FormlyFieldConfig;

  // Basic Data structure
  // {
  //   value: 'Manuel',
  //   label: 'FirstName',
  //   type: 'text',
  //   validators: {
  //     required: true
  //   }
  // },
  // lastName: {
  //   value: 'Rodriguez',
  //   label: 'LastName',
  //   type: 'text'
  // },
  // age: {
  //   value: 27,
  //   label: 'Age',
  //   type: 'number',
  //   validators: { min: 18 }
  // },
  // city: {
  //   value: 'NY',
  //   label: 'City',
  //   type: 'select',
  //   options: [
  //     { label: '(Choose one)', value: '' },
  //     { label: 'New York', value: 'NY' },
  //     { label: 'Los Angeles', value: 'LA' }
  //   ]
  // },
  // gender: {
  //   value: 'M',
  //   type: 'radio',
  //   label: 'Gender',
  //   options: [
  //     {
  //       label: 'Male',
  //       value: 'M'
  //     },
  //     {
  //       label: 'Female',
  //       value: 'F'
  //     }
  //   ]
  // }
}
