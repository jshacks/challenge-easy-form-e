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
    
    {
      key: 'checked4',
      type: 'checkbox',
      templateOptions: {
        label: "-articolul 105. (6) litera b) din Legea nr.207/2015 privind Codul de procedura fiscala, cu modificarile si completarile ulterioare",
        placeholder: ""
      }
    },

    {
      template : "<div><strong> DATELE DE IDENTIFICARE A PERSOANEI IMPOZABILE</div>"
    }, 
    {
      key: 'codFiscal',
      type: 'input',
      templateOptions: {
        label: "Cod de indentificare fiscala",
        placeholder: ""
      }
    },
    

    {
      key: 'numePrenume',
      type: 'input',
      templateOptions: {
        label: "Denumire / Nume, Prenume",
        placeholder: ""
      }
    },
    {
      template : "<div> Domiciliu fiscal</div>"
    },
    {
      key: 'adress',
      type: 'input',
      templateOptions: {
        label: "Adresa (judet ,localit.,str.,disabled.,scara,ap.,cod postal,sector)",
        placeholder: ""
      }
    },

    {
      key: 'phoneNumber',
      type: 'input',
      templateOptions: {
        label: "Telefon",
        placeholder: ""
      }
    },

    {
      key: 'faxNumber',
      type: 'input',
      templateOptions: {
        label: "Fax",
        placeholder: ""
      }
    },

    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: "E-mail",
        placeholder: ""
      }
    },

    {
      key: 'bank',
      type: 'input',
      templateOptions: {
        label: "Banca",
        placeholder: ""
      }
    },

    {
      key: 'account',
      type: 'input',
      templateOptions: {
        label: "Cont",
        placeholder: ""
      }
    },

    {
      key: 'checked4',
      type: 'checkbox',
      templateOptions: {
        label: "Persoane care nu sunt inregistrate in scopuri TVA",
        placeholder: ""
      }
    },
    
    {
      key: 'checked5',
      type: 'checkbox',
      templateOptions: {
        label: "Persoane care nu sunt inregistrate conform art.317 din Legea nr. 227/2015 privind Codul fiscal, cu modificarile si completarile ulterioare",
        placeholder: ""
      }
    },
    {
      template : "<div> Prezenta delcaratie constituie titlul de creanta si produce efecte juridice...</div>"
    },
     {
      key: 'nume2',
      type: 'input',
      templateOptions: {
        label: "Nume",
        placeholder: ""
      }
     },
      {
      key: 'prenume2',
      type: 'input',
      templateOptions: {
        label: "Prenume",
        placeholder: ""
      }
      },
       {
      key: 'function',
      type: 'input',
      templateOptions: {
        label: "Functia",
        placeholder: ""
      }
      },


    ]
}
}
