import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormlyModule, FormlyFieldConfig, FormlyBootstrapModule, Field, FieldWrapper} from '../../formly';


@Component({
  selector: 'd301',
  styleUrls: ['./form.scss'],
  templateUrl: './form.html'
})
export class Form {
  form: FormGroup;
  userFields: FormlyFieldConfig[];
  user: any = {}

  constructor(fb: FormBuilder) {
    this.form = fb.group({});

    this.userFields = [{
      key: 'luna',
      type: 'input',
      templateOptions: {
        label: "pentru luna",
        placeholder: "ex: 1"
      }

    },
    {
      key: 'anul',
      type: 'input',
      templateOptions: {
        label: "anul",
        placeholder: "ex: 2016"
      }
    },
      
    {
      key: 'checked',
      type: 'checkbox',
      templateOptions: {
        label: "Declaratie rectificativa",
        placeholder: "Se completeaza cu x in cazul declaratiilor rectificative"
      }
    },
    
    

    ]
}
}
