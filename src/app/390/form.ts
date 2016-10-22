import {FormBuilder, FormGroup} from "@angular/forms";
import {FormlyModule, FormlyFieldConfig, FormlyBootstrapModule, Field, FieldWrapper} from '../../formly';
import {Component} from '@angular/core';

@Component({
  selector: 'd390',
  styleUrls: ['./form.scss'],
  templateUrl: './form.html'
})
  export class Form {

  form: FormGroup;
  userFields: FormlyFieldConfig[];
  user: any = {
  "prenume_declar":"Popescu1",
  "functie_declar":"Administrator",
  "childNodes":[
    {
      "nr_pag":1,
      "bazaL":0,
      "nrOPI":2,
      "bazaP":0,
      "bazaA":38,
      "tagName":"rezumat",
      "bazaT":0,
      "total_baza":38,
      "bazaS":0
    },
    {
      "baza":23,
      "tip":"A",
      "tara":"NL",
      "tagName":"operatie",
      "denO":"Uber BV"
    },
    {
      "baza":15,
      "tip":"A",
      "tara":"DK",
      "tagName":"operatie",
      "denO":"Gigi SA"
    }
  ],
  "xsi:schemaLocation":"mfp:anaf:dgti:d390:declaratie:v1 D390.xsd",
  "xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance",
  "tagName":"declaratie390",
  "den":"Vasile Popescu",
  "an":2016,
  "luna":4,
  "xmlns":"mfp:anaf:dgti:d390:declaratie:v1",
  "cui":34983363,
  "totalPlata_A":40,
  "adresa":"Bucuresti Aleea Florilor",
  "nume_declar":"Vasile1",
  "d_rec":0
}

  constructor(fb: FormBuilder) {
    this.form = fb.group({});

    this.userFields = [{
      key: 'checked',
      type: 'checkbox',
      templateOptions: {
        label: "DECLARATIE RECTIFICATIVA",
        placeholder: ""
      }

    }, {
      key: 'an',
      type: 'input',
      templateOptions: {
        label: "Perioada de Raportare Anul",
        placeholder: "2016"
      }

    }, {
      key: 'luna',
      type: 'input',
      templateOptions: {
        label: "Luna",
        placeholder: "4"
      }

    }, 
    {
      key: 'cui',
      type: 'input',
      templateOptions: {
        label: "COD DE IDENTIFICARE FISCALA    RO",
        placeholder: "34983363"
      }

    },
    {
      key: 'prenume_declar',
      type: 'input',
      templateOptions: {
        label: "Prenume",
        placeholder: "Ex:Gogu"
      }

    },
    {
      key: 'functie_declar',
      type: 'input',
      templateOptions: {
        label: "Functie",
        placeholder: "ex: administrator"
      }

    }
   ,
    ]
  }

}