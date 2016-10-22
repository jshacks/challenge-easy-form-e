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
  user: any = {
  "cif_c": 2970714332237,
  "adresa_i": "strada Exercitiu nr. 21 bl. B1 sc. B ap. 3 jud. Arges localit. Pitesti cod postal 1122345",
  "prenume_c": "Prenume Popescu",
  "adresa_c": "strada Intrarea florilor nr. 89 bl. Bl sc. A et. 3 ap. 6 jud. Arges localit. Pitesti cod postal 123456",
  "cif_entitate": 12525322,
  "den_i": "Gigi Becali",
  "bifa_entitate": 1,
  "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
  "bifa_bursa": 1,
  "luna": 12,
  "cif_i": 12525322,
  "xmlns": "mfp:anaf:dgti:d230:declaratie:v2",
  "totalPlata_A": 768,
  "nume_c": "Nume Ion",
  "telefon_c": "034567234",
  "suma_bursa": 256,
  "telefon_i": "0766345261",
  "xsi:schemaLocation": "mfp:anaf:dgti:d230:declaratie:v2 D230.xsd",
  "den_entitate": "Biserica Monstrului zburator de spaghete",
  "initiala_c": "M",
  "tagName": "declaratie230",
  "contract_bursa": "111/28.03.2016",
  "an": 2015,
  "doc_plata_bursa": "222/28.03.2016",
  "suma_entitate": 512,
  "cont_entitate": "RO91BACX0000001166520000"
}

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
      key: 'nume_c',
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
    ,
    {
      key: 'telefon',
      type: 'input',
      templateOptions: {
        label: "Telefon",
        placeholder: ""
      }   
    }
    ,
    {
      key: 'fax',
      type: 'input',
      templateOptions: {
        label: "Fax",
        placeholder: ""
      }
    }
    ,
    {
      key: 'etaj',
      type: '',
      templateOptions: {
        label: "Etaj",
        placeholder: ""
      }
    }
      

    ]
  }

}
