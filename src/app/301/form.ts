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
  user: any =  {
  "tva5": 0,
  "cif": 34983363,
  "tva3": 0,
  "tva4": 0,
  "tva1": 66,
  "tva2": 0,
  "nr_evid": "10301010516250616000038",
  "functia_declarant": "Administrator",
  "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
  "nume_declarant": "Gigi",
  "luna": 5,
  "temei": 1,
  "xmlns": "mfp:anaf:dgti:d301:declaratie:v1",
  "telefon": "021674873",
  "totalPlata_A": 3240,
  "adresa": "Cucuietii din deal",
  "baza1": 3174.4,
  "d_rec": 1,
  "fax": "034573412",
  "cont": "RO65BTRL00504205W13542XX",
  "baza4": 0,
  "baza5": 0,
  "email": "gogu@example.com",
  "baza2": 0,
  "baza3": 0,
  "childNodes": [
    {
      "val_valuta": 512,
      "data_doc": "22.10.2016",
      "nr_doc": 22,
      "tip_valuta": "EUR",
      "baza": 2304,
      "tagName": "sectiune",
      "tip_operatie": 1,
      "curs_valutar": 4.5,
      "tva": 23
    },
    {
      "val_valuta": 256,
      "data_doc": "20.10.2016",
      "nr_doc": 23,
      "tip_valuta": "USD",
      "baza": 870.4,
      "tagName": "sectiune",
      "tip_operatie": 1,
      "curs_valutar": 3.4,
      "tva": 43
    }
  ],
  "xsi:schemaLocation": "mfp:anaf:dgti:d301:declaratie:v1 D301.xsd",
  "tagName": "declaratie301",
  "an": 2016,
  "pers_inreg": 2,
  "mijl_trans": 1,
  "denumire": "Baubau srl",
  "prenume_declarant": "Becali",
  "banca": "Pusculita"
}

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
      key: 'an',
      type: 'input',
      templateOptions: {
        label: "anul",
        placeholder: "ex: 2016"
      }
    },
      
    {
      key: 'd_rec',
      type: 'checkbox',
      templateOptions: {
        label: "Declaratie rectificativa",
        placeholder: ""
      }
    },

    {
      key: 'mijl_trans',
      type: 'checkbox',
      templateOptions: {
        label: "Declaratie pentru achizitii intracomunitare de mijloace de transport noi",
        placeholder: ""
      }
    },
{
        type: 'radio',
        key: 'temei',
        templateOptions: {
          options: [{
             key: 'temei',
            value: '-articolul 105. (6) litera a) din Legea nr.207/2015 privind Codul de procedura fiscala, cu modificarile si completarile ulterioare'
          }, {
             key: 'temei',
            value: '-articolul 105. (6) litera b) din Legea nr.207/2015 privind Codul de procedura fiscala, cu modificarile si completarile ulterioare'
          }],
          label: 'Temeiul legal pentru depunerea formularului 301 dupa anularea rezervei verificarii ulterioare:',
          description: 'Select a title that suits your description'
        }
      },
    

    {
      template : "<div><strong> DATELE DE IDENTIFICARE A PERSOANEI IMPOZABILE</div>"
    }, 
    {
      key: 'cif',
      type: 'input',
      templateOptions: {
        label: "Cod de indentificare fiscala",
        placeholder: ""
      }
    },
    

    {
      key: 'denumire',
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
      key: 'adresa',
      type: 'input',
      templateOptions: {
        label: "Adresa (judet ,localit.,str.,disabled.,scara,ap.,cod postal,sector)",
        placeholder: ""
      }
    },

    {
      key: 'telefon',
      type: 'input',
      templateOptions: {
        label: "Telefon",
        placeholder: ""
      }
    },

    {
      key: 'fax',
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
      key: 'banca',
      type: 'input',
      templateOptions: {
        label: "Banca",
        placeholder: ""
      }
    },

    {
      key: 'cont',
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
      key: 'nume_declarant',
      type: 'input',
      templateOptions: {
        label: "Nume",
        placeholder: ""
      }
     },
      {
      key: 'prenume_declarant',
      type: 'input',
      templateOptions: {
        label: "Prenume",
        placeholder: ""
      }
      },
       {
      key: 'functia_declarant',
      type: 'input',
      templateOptions: {
        label: "Functia",
        placeholder: ""
      }
      },
      {
        template : "<div><strong> DATE PRIVIND OBLIGATIA DE PLATA </div>"
      },
      {
        template : "<div> Sectiunea 1. Achizitii intracomunitare de bunuri taxabile    -lei </div>"
      },

       {
      key: 'docName',
      type: 'input',
      templateOptions: {
        label: "Document Numar",
        placeholder: ""
      }
      },
        {
      key: 'docDate',
      type: 'input',
      templateOptions: {
        label: "Document Data",
        placeholder: ""
      }
      },
        {
      key: 'docVal',
      type: 'input',
      templateOptions: {
        label: "Valoare in valuta",
        placeholder: ""
      }
      },
        {
      key: 'docTypeVal',
      type: 'input',
      templateOptions: {
        label: "Document Numar",
        placeholder: ""
      }
      },


    ]
}
}
