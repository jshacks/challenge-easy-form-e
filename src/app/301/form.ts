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
      key: 'checked1',
      type: 'checkbox',
      templateOptions: {
        label: "Declaratie rectificativa",
        placeholder: ""
      }
    },

    {
      key: 'checked2',
      type: 'checkbox',
      templateOptions: {
        label: "Declaratie pentru achizitii intracomunitare de mijloace de transport noi",
        placeholder: ""
      }
    },

    {
      key: 'checked3',
      type: 'checkbox',
      templateOptions: {
        label: "-articolul 105. (6) litera a) din Legea nr.207/2015 privind Codul de procedura fiscala, cu modificarile si completarile ulterioare",
        placeholder: ""
      }
    },
    
    

    ]
}
}
