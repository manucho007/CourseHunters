import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  styles: []
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  @Input() formDataObj;
  personProps = [];
  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.formDataObj)) {
      formDataObj[prop] = new FormControl(this.formDataObj[prop].value);
      /*
        {
            key: firstName,
            label: 'FirstName',
            type: 'text',
            options:[]
        }
      */
      this.personProps.push({
        key: prop,
        label: this.formDataObj[prop].label,
        type: this.formDataObj[prop].type,
        options: this.formDataObj[prop].options
      });
    }
    this.form = new FormGroup(formDataObj);
  }
}
