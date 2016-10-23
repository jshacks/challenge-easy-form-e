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

    },
     {
      key: 'an',
      type: 'input',
      templateOptions: {
        label: "Perioada de Raportare Anul",
        placeholder: "2016"
      }

    },
     {
      key: 'luna',
      type: 'input',
      templateOptions: {
        label: "Luna",
        placeholder: "4"
      }

    },
    {
    template: "<div><b> I.DATE DE IDENTIFICARE</b></div>"
    } ,
    {
      key: 'cui',
      type: 'input',
      templateOptions: {
        label: "COD DE IDENTIFICARE FISCALA    RO",
        placeholder: "34983363"
      }

    },
    {
      key: 'den',
      type: 'input',
      templateOptions: {
        label: "DENUMIRE/NUME, PRENUME",
        placeholder: "Vasile Popescu"
      }

    },
    {
      key: 'adresa',
      type: 'input',
      templateOptions: {
        label: "DOMICILIUL FISCAL (judet/sector,localitate, strada,nr.,bloc,scara,etaj,apartament,cod postal)",
        placeholder: ""
      }

    },
    {
      key: 'telefon',
      type: 'input',
      templateOptions: {
        label: "TELEFON",
        placeholder: ""
      }

    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: "E-MAIL",
        placeholder: ""
      }

    },
    {
      key: 'fax',
      type: 'input',
      templateOptions: {
        label: "FAX",
        placeholder: ""
      }

    },
    {
      template:"<div><b>II. REZUMAT DECLARATIE</b></div>"
    },
    {
      key: 'totalPlata_A',
      type: 'input',
      templateOptions: {
        label: "(suma de control)",
        placeholder: ""
      }

    },
    {
      key: 'nr_pag',
      type: 'input',
      templateOptions: {
        label: "NUMAR TOTAL PAGINI ANEXA LA DECLARATIE",
        placeholder: "1"
      }

    },
    {
      key: 'nrOPI',
      type: 'input',
      templateOptions: {
        label: "NUMARUL TOTAL AL OPERATORILOR INTRACOMUNITARI",
        placeholder: ""
      }

    },
    {
      key: 'sumliv_achi',
      type: 'input',
      templateOptions: {
        label: "SUMA LIVRARILOR / ACHIZIZITIILOR INTRACOMUNITARE",
        placeholder: ""
      }

    },
    {
      key: 'bazaL',
      type: 'input',
      templateOptions: {
        label: "L-LIVRARI INTRACOMUNITARE DE BUNURI",
        placeholder: ""
      }

    },
    {
      key: 'bazaT',
      type: 'input',
      templateOptions: {
        label: "T-LIVRARI IN CADRUL UNEI OPERATIUNI TRIUNGHIULARE",
        placeholder: ""
      }

    },
    {
      key: 'bazaA',
      type: 'input',
      templateOptions: {
        label: "A-ACHIZITII INTRACOMUNITARE DE BUNURI",
        placeholder: ""
      }

    },
     {
      key: 'bazaP',
      type: 'input',
      templateOptions: {
        label: "P-PRESTARI INTRACOMUNITARE DE SERVICII",
        placeholder: ""
      }

    },
     {
      key: 'bazaS',
      type: 'input',
      templateOptions: {
        label: "S-ACHIZITII INTRACOMUNITARE DE SERVICII",
        placeholder: ""
      }

    },
    {
  template: "<div>Sub sanctiunile aplicate faptei de fals in acte publice, declar ca datele inscrise in acest formular sunt corecte si complete</div>"
    },{
      key: 'nume_declar',
      type: 'input',
      templateOptions: {
        label: "Numele",
        placeholder: "Ex:Gogu"
      }

    },
    {
      key: 'prenume_declar',
      type: 'input',
      templateOptions: {
        label: "Prenumele",
        placeholder: ""
      }

    },
    {
      key: 'functie_declar',
      type: 'input',
      templateOptions: {
        label: "Functie",
        placeholder: "ex: administrator"
      }

    },
    {
   template:"<div><b>LISTA OPERATIUNILOR INTRACOMUNITARE</B></DIV>"
    },
    {
      key: 'nr_crt',
      type: 'input',
      templateOptions: {
        label: "Nr.crt.",
        placeholder: "1"
      }

    },
    {
      key: 'tip',
      type: 'input',
      templateOptions: {
        label: "TIP *(L/T/A/P/S)",
        placeholder: ""
      }

    },
    {
      key: 'tara',
      type: 'input',
      templateOptions: {
        label: "TARA",
        placeholder: ""
      }

    },
    {
      key: 'codO',
      type: 'input',
      templateOptions: {
        label: "COD OPERATOR INTRACOMUNITAR",
        placeholder: ""
      }

    },
    {
      key: 'denO',
      type: 'input',
      templateOptions: {
        label: "DENUMIRE/NUME, PRENUME OPERATOR INTRACOMUNITAR",
        placeholder: "Vasile Popescu"
      }

    },
    {
      key: 'baza',
      type: 'input',
      templateOptions: {
        label: "BAZA IMPOZABILA",
        placeholder: ""
      }

    },
    {
      key: 'total_baza',
      type: 'input',
      templateOptions: {
        label: "TOTAL GENERAL",
        placeholder: ""
      }
    }
   
    ]
    var count = 0;
    for(var i = 0; i < this.user.nrOPI; ++i)
    {  count++;
        this.user.nrOPI=count;
    }
    var total = 0;
    for (i=0; i<this.user.bazaL; i++)
     {
    total += this.user.bazaL[i];
    this.user.bazaL=total;
     }

    this.user.totalPlata_A = +this.user.nrOPI + +this.user.bazaL + +this.user.bazaT + +this.user.bazaA + +this.user.bazaP + +this.user.bazaS;
  }

}