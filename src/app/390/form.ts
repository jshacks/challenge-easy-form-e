import {FormBuilder, FormGroup} from "@angular/forms";
import {FormlyModule, FormlyFieldConfig, FormlyBootstrapModule, Field, FieldWrapper} from '../../formly';
import {Component} from '@angular/core';
import {Declaratia310Service} from '../services/declaratieService';

@Component({
  selector: 'd390',
  styleUrls: ['./form.scss'],
  templateUrl: './form.html'
})
  export class Form {
  response:string;
  pdfId:string;

  form: FormGroup;
  userFields: FormlyFieldConfig[];
  user: any = {
  "prenume_declar":"Popescu1",
  "functie_declar":"Administrator",
  "childNodes":[
    {
      "nr_pag":1,
      "bazaL":0,
      "nrOPI":0,
      "bazaP":0,
      "bazaA":0,
      "tagName":"rezumat",
      "bazaT":0,
      "total_baza":0,
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

achizitiiBunuriTaxabile = [
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
    }]

  constructor(fb: FormBuilder, private dService: Declaratia310Service) {
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
    }
   
    ]
   }
  

  postProcess(){
    

   var calculSumaTotala = {
      "nr_pag":1,
      "bazaL":0,
      "nrOPI":0,
      "bazaP":0,
      "bazaA":0,
      "tagName":"rezumat",
      "bazaT":0,
      "total_baza":0,
      "bazaS":0
    } 
    
  var count=0;

  for (let node of this.achizitiiBunuriTaxabile)
  { 
    count++;  
    if (node.tip=='S')
    {
      calculSumaTotala.bazaS+= +node.baza
    }
    if (node.tip=='A')
    {
      calculSumaTotala.bazaA+= +node.baza
    }
    if (node.tip=='L')
    {
      calculSumaTotala.bazaL+= +node.baza
    }if (node.tip=='P')
    {
      calculSumaTotala.bazaP+= +node.baza
    }if (node.tip=='T')
    {
      calculSumaTotala.bazaT+= +node.baza
    }
  }
  calculSumaTotala.nrOPI=count;
  calculSumaTotala.total_baza=calculSumaTotala.bazaS + calculSumaTotala.bazaA + calculSumaTotala.bazaL + calculSumaTotala.bazaP + calculSumaTotala.bazaT;
  this.user.childNodes=[];
  this.user.childNodes.push(calculSumaTotala);
  this.user.totalPlata_A=calculSumaTotala.nrOPI + calculSumaTotala.total_baza;

for (let node of this.achizitiiBunuriTaxabile)
{this.user.childNodes.push(node)}


  this.dService.sendData(this.user).then(response => {
      console.log("received response");
    this.response = JSON.parse(response["_body"]);
    if(this.response['fileId'] != '') {
       this.pdfId = this.response['fileId'];
       console.log("pdfid set:" + this.pdfId);
    } else {
      console.log("no fileid");
    }
  }) 

  }
  addAchizitie() {
  this.achizitiiBunuriTaxabile.push( {
      "baza":0,
      "tip":"",
      "tara":"",
      "tagName":"operatie",
      "denO":""
    })
}
}