import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormlyModule, FormlyFieldConfig, FormlyBootstrapModule, Field, FieldWrapper} from '../../formly';

@Component({
  selector: 'd112',
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
      key: 'sumCtrl',
      type: 'input',
      templateOptions: {
        label: "(suma de control)",
        placeholder: "0"
      }
    },
    {
      key: 'numePers',
      type: 'input',
      templateOptions: {
        label: "Nume",
        placeholder: ""
      }
    },
    {
      key: 'initTata',
      type: 'input',
      templateOptions: {
        label: "Initiala tatalui",
        placeholder: ""
      }
    },
    {
      key: 'prenumePers',
      type: 'input',
      templateOptions: {
        label: "Prenume",
        placeholder: ""
      }
    },
    {
      key: 'strada',
      type: 'input',
      templateOptions: {
        label: "Strada",
        placeholder: ""
      }
    },
    {
      key: 'numar',
      type: 'input',
      templateOptions: {
        label: "Numar",
        placeholder: ""
      }
    },
    {
      key: 'bloc',
      type: 'input',
      templateOptions: {
        label: "Bloc",
        placeholder: ""
      }
    },
    {
      key: 'scara',
      type: 'input',
      templateOptions: {
        label: "Scara",
        placeholder: ""
      }
    },
    {
      key: 'etaj',
      type: 'input',
      templateOptions: {
        label: "Etaj",
        placeholder: ""
      }
    },
    {
      key: 'apar',
      type: 'input',
      templateOptions: {
        label: "Ap.",
        placeholder: ""
      }
    }
      ,
    {
      key: 'judSect',
      type: 'input',
      templateOptions: {
        label: "Judet/Sector",
        placeholder: ""
      }
    }
    ,
    {
      key: 'local',
      type: 'input',
      templateOptions: {
        label: "Localitate",
        placeholder: ""
      }
    },
    {
      key: 'codp',
      type: 'input',
      templateOptions: {
        label: "Cod postal",
        placeholder: ""
      }
    }
    ,
    {
      key: 'cnp',
      type: 'input',
      templateOptions: {
        label: "Cod numeric personal/Numar de identificare fiscala",
        placeholder: ""
      }
    }
    ,
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: "E-mail",
        placeholder: ""
      }
    }
      

    ]
  }

}
