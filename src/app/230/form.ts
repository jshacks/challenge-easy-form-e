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

    this.userFields = [
       {
      template: "<div><b> CERERE PRIVIND DESTINATIA SUMEI REPREZENTAND PANA LA 2% DIN IMPOZITUL ANUAL PE VENITURILE DIN SALARII SI ASIMILATE SALARIILOR</b></div>"
    },
    {
      key: 'an',
      type: 'input',
      templateOptions: {
        label: "Anul",
        placeholder: "2016"
      }
    },
      {
      key: 'totalPlata_A',
      type: 'input',
      templateOptions: {
        label: "(suma de control)",
        placeholder: "0"
      }
    },
    {
      template :"<div><b> 1.DATE DE IDENTIFICARE A CONTRIBUABILULUI</b></div>"
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
      key: 'initiala_c',
      type: 'input',
      templateOptions: {
        label: "Initiala tatalui",
        placeholder: ""
      }
    },
    {
      key: 'prenume_c',
      type: 'input',
      templateOptions: {
        label: "Prenume",
        placeholder: ""
      }
    },
    {
      key: 'strada_c',
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
      key: 'cif_c',
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
      key: 'telefon_c',
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
      template: "<div><b> 1.DESTINATIA SUMEI REPREZENTAND PANA LA 2% DIN IMPOZITUL ANUAL,POTRIVIT ART 57. ALIN.(4) DIN LEGEA NR.571/2003</b></div>"
    },
    {
      key: 'bifa_bursa',
      type: 'checkbox',
      templateOptions: {
        label: "1 Bursa privata",
        placeholder: ""
      }
    }
     ,
    {
      key: 'suma_bursa',
      type: 'input',
      templateOptions: {
        label: "Suma platita (lei)",
        placeholder: ""
      }
    },
    {
      key: 'contract_bursa',
      type: 'input',
      templateOptions: {
        label: "Contract nr./data",
        placeholder: ""
      }
    }
    ,
    {
      key: 'doc_plata_bursa',
      type: 'input',
      templateOptions: {
        label: "Documente de plata nr./data",
        placeholder: ""
      }
    } ,
    {
      key: 'bifa_entitate',
      type: 'checkbox',
      templateOptions: {
        label: "2 Sustinerea unei entitati nonprofit/ unitati de cult",
        placeholder: ""
      }
    }
    ,
    {
      key: 'suma_entitate',
      type: 'input',
      templateOptions: {
        label: "Suma (lei)",
        placeholder: ""
      }
    } ,
    {
      key: 'cont_entitate',
      type: 'input',
      templateOptions: {
        label: "Cont bancar (IBAN)",
        placeholder: ""
      }
    } ,
    {
      key: 'den_entitate',
      type: 'input',
      templateOptions: {
        label: "Denumire entitate nonprofit/unitate de cult",
        placeholder: ""
      }
    } ,
    {
      key: 'cif_entitate',
      type: 'input',
      templateOptions: {
        label: "Cod de identificare fiscala entitate nonprofit/unitate de cult",
        placeholder: ""
      }
    },
     {
      template :"<div><b> 1.DATE DE IDENTIFICARE A IMPUTERNICITULUI</b></div>"
    },
    {
      key: 'den_i',
      type: 'input',
      templateOptions: {
        label: "Nume,prenume/Denumire",
        placeholder: ""
      }
    },
    {
      key: 'cif_i',
      type: 'input',
      templateOptions: {
        label: "Cod de identificare fiscala",
        placeholder: ""
      }
    },
    {
      key: 'judsecI',
      type: 'input',
      templateOptions: {
        label: "Judet/Sector",
        placeholder: ""
      }
    },
    {
      key: 'locI',
      type: 'input',
      templateOptions: {
        label: "Localitate",
        placeholder: ""
      }
    },
    {
      key: 'strI',
      type: 'input',
      templateOptions: {
        label: "Strada",
        placeholder: ""
      }
    },
    {
      key: 'nrI',
      type: 'input',
      templateOptions: {
        label: "Numar",
        placeholder: ""
      }
    },
    {
      key: 'blocI',
      type: 'input',
      templateOptions: {
        label: "Bloc",
        placeholder: ""
      }
    },
    {
      key: 'scaraI',
      type: 'input',
      templateOptions: {
        label: "Scara",
        placeholder: ""
      }
    },
    {
      key: 'apI',
      type: 'input',
      templateOptions: {
        label: "Apartament",
        placeholder: ""
      }
    },
    {
      key: 'codpI',
      type: 'input',
      templateOptions: {
        label: "Cod postal",
        placeholder: ""
      }
    },
    {
      key: 'telefon_i',
      type: 'input',
      templateOptions: {
        label: "Telefon",
        placeholder: ""
      }
    },
    {
      key: 'faxI',
      type: 'input',
      templateOptions: {
        label: "Fax",
        placeholder: ""
      }
    },
    {
      key: 'emailI',
      type: 'input',
      templateOptions: {
        label: "E-mail",
        placeholder: ""
      }
    }

    
      

    ]
  }

  validare() {
    let adresa = `strada ${this.user.strada_c} nr. ${this.user.numar} bl. ${this.user.bloc} sc. ${this.user.scara} et. ${this.user.etaj} ap. ${this.user.apar} jud. ${this.user.judSect} localit. ${this.user.local} cod postal ${this.user.codp}`;
    
    this.user.adresa_c = adresa;

    delete this.user.numar;
    delete this.user.bloc;
    delete this.user.scara;
    delete this.user.etaj;
    delete this.user.apar;
    delete this.user.judSect;
    delete this.user.local;
    delete this.user.codp;

    let adresa2=`strada ${this.user.strI} nr. ${this.user.nrI} bl. ${this.user.blocI} sc. ${this.user.scaraI}  ap. ${this.user.apI} jud. ${this.user.judsecI} localit. ${this.user.locI} cod postal ${this.user.codpI}`

    this.user.adresa_i = adresa2;

    delete this.user.strI;
    delete this.user.nrI;
    delete this.user.blocI;
    delete this.user.scaraI;
    delete this.user.apI;
    delete this.user.judsecI;
    delete this.user.locI;
    delete this.user.codpI;

    this.user.totalPlata_A = +this.user.suma_bursa + +this.user.suma_entitate;

  }

}
