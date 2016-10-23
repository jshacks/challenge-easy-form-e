import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormlyModule, FormlyFieldConfig, FormlyBootstrapModule, Field, FieldWrapper} from '../../formly';
import {Declaratia310Service} from '../services/declaratieService';

@Component({
  selector: 'd220',
  styleUrls: ['./form.scss'],
  templateUrl: './form.html'
})
export class Form {
  group: FormGroup;
  fields: FormlyFieldConfig[];

  response:string;
  pdfId:string;
  loading: boolean = false;

  postData: any = {};
  data: any = {
    'tagName': 'declaratie220',
    'xmlns': 'mfp:anaf:dgti:d220:declaratie:v2',
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    'xsi:schemaLocation': 'mfp:anaf:dgti:d220:declaratie:v2 D220.xsd',

    'luna': 12, // n2 da . nu exista
    'an': 2016, // n4 da .
    'd_rec1': 0, // n1 da .
    'd_rec2': 0, // n1 da .
    'stat_pensie': 0, // n3 da .
    'nume_declar': 'Declar Vasile', // c75 da .
    'prenume_declar': 'Declar prenume vasile', // c75 da .
    'functie_declar': 'Administrator', // c50 da .
    'totalPlata_A': 0, // n15 da

    'nume': 'Gigi becali', // I. c75 da .
    'cif': 2970714332237, // n13 da .
    'adresa': 'Strada turturica vesela', // c200 .
    'telefon': '021345678', // c15 .
    'fax': 9887654412, // c15 .
    'email': 'gogu@example.com', // c200 .

    'den_r': 'Sfantu Petru', // IV. c75
    'cif_r': 34983363, // n13
    'adresa_r': 'Cucuietii din deal', // c200
    'telefon_r': '0213456', // c15
    'fax_r': '021345678', // c15
    'email_r': 'gogu@example.com', // c200

    'childNodesPre': {
      'tagName': 'activitate',

      'categ_venit': 4, // II. n1 da
      'det_venit': 1, // n1 da
      'forma_org': 2, // n1 da
      'CAEN': 6202, // c4
      'judet': '03', // n2 . select
      'localitate': 'PITESTI', // c50
      'sediu': 'Aleea Cucului', // c200
      // 'sector' : 1, // select
      // 'tip_doc' : 1, // select
      'data_I': '12.10.2016', // d10
      'data_F': '22.10.2016', // d10
      'nr_zile': 4, // n3

      'venit3': 100, // n15 da
      'chelt3': 10, // n15 da
      'net3': 90 // n15 da
    },
    'childNodes': [] // de adaugat childNodesPre
  };
  constructor(fb: FormBuilder, private dService: Declaratia310Service) {
    this.group = fb.group({});
    this.fields = [{
      className: 'row',
      fieldGroup: [{
        className: 'col-xs-6',
        template: '<h4>Configurari generale</h4>'
      }, {
        className: 'col-xs-3 offset-xs-3',
        key: 'an',
        type: 'input',
        templateOptions: {
          label: 'Anul',
          type: 'number'
        },
        validation: Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(4)])
      }]
    }, {
      className: 'row',
      fieldGroup: [{
        className: 'col-xs-6',
        key: 'd_rec1',
        type: 'multicheckbox',
        templateOptions: {
          options: [{
            key: '1',
            value: '1.a. Cu titlu de impozit'
          }, {
            key: '2',
            value: '1.b. Cu titlu de contributii sociale'
          }],
          label: '1. Recalcularea platilor anticipate *)'
        },
        validation: Validators.compose([Validators.required])
      }, {
        className: 'col-xs-6',
        key: 'd_rec2',
        type: 'checkbox',
        templateOptions: {
          label: '2. Modificarea modului de determinare a venitului net'
        },
        validation: Validators.compose([Validators.required])
      }, {
        className: 'col-xs-12',
        key: 'stat_pensie',
        type: 'select',
        templateOptions: {
          label: '3. Venituri din pensii din strainatate realizate in statul:',
          options: [{
            label: '00--nicio selectie',
            value: 0
          }, {
            label: 'RO--Romania',
            value: 642
          }, {
            label: 'AF--Afganistan',
            value: 4
          }, {
            label: 'AX--Insulele Aland',
            value: 248
          }, {
            label: 'AL--Albania   ',
            value: 8
          }]
        },
        validation: Validators.compose([Validators.required])
      }]
    }, {
      className: 'row',
      fieldGroup: [{
        className: 'col-xs-12',
        template: '<h3>Sub sanctiunile aplicate faptei de fals in acte publice, declar ca datele inscrise in acest formular sunt corecte si complete.</h3>'
      }, {
        className: 'col-xs-4',
        key: 'nume_declar',
        type: 'input',
        templateOptions: {
          label: 'Nume'
        },
        validation: Validators.compose([Validators.required, Validators.maxLength(75)])
      }, {
        className: 'col-xs-4',
        key: 'prenume_declar',
        type: 'input',
        templateOptions: {
          label: 'Prenume'
        },
        validation: Validators.compose([Validators.required, Validators.maxLength(75)])
      }, {
        className: 'col-xs-4',
        key: 'functie_declar',
        type: 'input',
        templateOptions: {
          label: 'Functia'
        },
        validation: Validators.compose([Validators.required, Validators.maxLength(50)])
      }]
    }, {
      template: '<h4>I. Date de identificare a contribuabilului</h4>'
    }, {
      key: 'nume',
      type: 'input',
      templateOptions: {
        label: 'Nume si Prenume'
      },
      validation: Validators.compose([Validators.required, Validators.maxLength(75)])
    }, {
      key: 'cif',
      type: 'input',
      templateOptions: {
        label: 'CNP / NIF',
        type: 'number'
      },
      validation: Validators.compose([Validators.required, Validators.maxLength(13), Validators.minLength(13)])
    }, {
      key: 'adresa',
      type: 'input',
      templateOptions: {
        label: 'Adresa (Strada, Numar, Bloc, Scara, Etaj, Ap., Judet / Sector, Localitate, Cos postal)'
      },
      validation: Validators.compose([Validators.maxLength(200)])
    }, {
      key: 'telefon',
      type: 'input',
      templateOptions: {
        label: 'Telefon'
      },
      validation: Validators.compose([Validators.maxLength(15)])
    }, {
      key: 'fax',
      type: 'input',
      templateOptions: {
        label: 'Fax',
        type: 'number'
      },
      validation: Validators.compose([Validators.maxLength(15)])
    }, {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'E-mail',
        type: 'email'
      },
      validation: Validators.compose([Validators.maxLength(200)])
    }, {
      template: '<h4>IV. Date de identificare a imputernicitului</h4>'
    }, {
      key: 'den_r',
      type: 'input',
      templateOptions: {
        label: 'Nume, prenume / Denumire',
      },
      validation: Validators.compose([Validators.maxLength(75)])
    }, {
      key: 'cif_r',
      type: 'input',
      templateOptions: {
        label: 'Cod de identificare fiscala (CF / CNP)',
        type: 'number'
      },
      validation: Validators.compose([Validators.maxLength(13)])
    }, {
      key: 'adresa_r',
      type: 'input',
      templateOptions: {
        label: 'Adresa (Strada, Numar, Bloc, Scara, Etaj, Ap., Judet / Sector, Localitate, Cod postal)',
      },
      validation: Validators.compose([Validators.maxLength(200)])
    },{
      key: 'telefon_r',
      type: 'input',
      templateOptions: {
        label: 'Telefon',
      },
      validation: Validators.compose([Validators.maxLength(15)])
    },{
      key: 'fax_r',
      type: 'input',
      templateOptions: {
        label: 'Fax',
      },
      validation: Validators.compose([Validators.maxLength(15)])
    },{
      key: 'email_r',
      type: 'input',
      templateOptions: {
        label: 'E-mail',
        type: 'email'
      },
      validation: Validators.compose([Validators.maxLength(200)])
    }, {
      template: '<h4>II. Date privind activitatea desfasurata{{data|json}}</h4>'
    }, {
      key: 'childNodesPre',
      fieldGroup: [{
        key: 'categ_venit',
        type: 'select',
        templateOptions: {
          label: 'Categoria de venit',
          options: [{
            label: '1.Venituri din activitati de producție, prestari servicii, comert',
            value: 1
          }, {
            label: '2.Venituri din profesii liberale',
            value: 2
          }, {
            label: '3.Venituri din drepturi de proprietate intelectuala',
            value: 3
          }, {
            label: '4.Venituri din activităţi agricole',
            value: 4
          }, {
            label: '5.Venituri din silvicultura',
            value: 5
          }, {
            label: '6.Venituri din piscicultura',
            value: 6
          }, {
            label: '7.Venituri din cedarea folosintei bunurilor',
            value: 7
          }, {
            label: '8.Venituri din pensii din strainatate',
            value: 8
          }]
        },
        validation: Validators.compose([Validators.required, Validators.maxLength(1)])
      }, {
        key: 'contracte',
        type: 'radio',
        templateOptions: {
          options: [{
            key: 1,
            value: 'sub 5 contracte'
          }, {
            key: 2,
            value: 'peste 5 contracte'
          }, {
            key: 3,
            value: 'in scop turistic'
          }]
        }
      }, {
        key: 'nr_camere',
        type: 'input',
        templateOptions: {
          label: 'Numar camere',
          type: 'number'
        }
      }, {
        key: 'det_venit',
        type: 'select',
        templateOptions: {
          label: '2. Determinarea venitului net',
          options: [{
            label: '0-Nu este cazul pentru categ_venit == 8',
            value: 0
          }, {
            label: '1-Sistem real',
            value: 1
          }, {
            label: '2-Cote forfetare de cheltuieli',
            value: 2
          }, {
            label: '3-Norma de venit',
            value: 3
          }]
        },
        validation: Validators.compose([Validators.required, Validators.maxLength(1)])
      }, {
        key: 'forma_org',
        type: 'select',
        templateOptions: {
          label: '3. Forma de organizare',
          options: [{
            label: '0-Nu este cazul pentru categ_venit == 8',
            value: 0
          }, {
            label: '1-Individual',
            value: 1
          }, {
            label: '2-Asociere fara personalitate juridica',
            value: 2
          }, {
            label: '3-Entitati supuse regimului transparentei fiscale',
            value: 3
          }, {
            label: '4-Modificarea modalitatii/ formei de exercitare a activitatii',
            value: 4
          }]
        },
        validation: Validators.compose([Validators.required])
      }, {
        key: 'CAEN',
        type: 'input',
        templateOptions: {
          label: '4. Obiectivul principal de activitate (cod si denumire clasa CAEN)',
        },
        validation: Validators.compose([Validators.maxLength(4)])
      }, {
        key: 'sediu',
        type: 'input',
        templateOptions: {
          label: '5. Sediul / Datele de identificare ale bunului pentru care se cedeaza folosinta (Strada, Numar, Bloc, Scara, Etaj, Ap., Cod postal)',
        },
        validation: Validators.compose([Validators.maxLength(200)])
      }, {
        key: 'judet',
        type: 'input',
        templateOptions: {
          label: 'Judet',
          type: 'number'
        },
        validation: Validators.compose([Validators.maxLength(3)])
      }, {
        key: 'localitate',
        type: 'input',
        templateOptions: {
          label: 'Localitate',
        },
        validation: Validators.compose([Validators.maxLength(50)])
      }, {
        key: 'sector',
        type: 'input',
        templateOptions: {
          label: 'Sector',
          type: 'number'
        },
        validation: Validators.compose([Validators.maxLength(1)])
      }, {
        key: 'tip_doc',
        type: 'input',
        templateOptions: {
          label: 'Documentul de autorizare / Contractul de asociere / inchiriere',
          type: 'number'
        },
        validation: Validators.compose([Validators.maxLength(3)])
      }, {
        key: 'nr_doc',
        type: 'input',
        templateOptions: {
          label: 'Nr.',
          type: 'number'
        },
        validation: Validators.compose([Validators.maxLength(11)])
      }, {
        key: 'data_doc',
        type: 'input',
        templateOptions: {
          label: 'Data (zz.ll.aaaa)',
        },
        validation: Validators.compose([Validators.maxLength(10)])
      }, {
        key: 'data_I',
        type: 'input',
        templateOptions: {
          label: '7. Data inceperii activitatii',
        },
        validation: Validators.compose([Validators.maxLength(10)])
      }, {
        key: 'data_F',
        type: 'input',
        templateOptions: {
          label: '8. Data incetarii activitatii',
        },
        validation: Validators.compose([Validators.maxLength(10)])
      }, {
        key: 'data_S',
        type: 'input',
        templateOptions: {
          label: '9. Data suspendarii activiatii',
        },
        validation: Validators.compose([Validators.maxLength(10)])
      }, {
        key: 'nr_zile',
        type: 'input',
        templateOptions: {
          label: '10. Numar zile de scutire ***)',
          type: 'number'
        },
        validation: Validators.compose([Validators.maxLength(3)])
      }, {
        key: 'data_CAS',
        type: 'input',
        templateOptions: {
          label: '11. Data incetarii obligatiei de plata a CAS ****)',
        },
        validation: Validators.compose([Validators.maxLength(10)])
      }, {
        template: '<h4>III. Date privind venitul estimat</h4>'
      }, {
        key: 'venit3',
        type: 'input',
        templateOptions: {
          label: '1. Venit brut estimat',
          type: 'number'
        },
        validation: Validators.compose([Validators.required, Validators.maxLength(15)])
      }, {
        key: 'chelt3',
        type: 'input',
        templateOptions: {
          label: '2. Cheltuieli deductibile estimate',
          type: 'number'
        },
        validation: Validators.compose([Validators.required, Validators.maxLength(15)])
      }, {
        key: 'net3',
        type: 'input',
        templateOptions: {
          label: '3. Venit net estimat (rd.1 - rd.2)',
          type: 'number',
          disabled: true
        },
        validation: Validators.compose([Validators.required, Validators.maxLength(15)])
      }]
    }];
  }

  postProcess() {
    this.data.d_rec1 = this.data.d_rec1[1] ? 1 : 0 + this.data.d_rec1[2] ? 2 : 0;
    this.data.d_rec2 = this.data.d_rec2 ? 1 : 0;
    this.data.d_rec = this.data.d_rec1 + this.data.d_rec2 > 0 ? 1 : 0;

    let venit3 = parseInt(this.data.childNodesPre.venit3);
    let chelt3 = parseInt(this.data.childNodesPre.chelt3);
    let net3 = venit3 - chelt3;
    this.data.childNodesPre.net3 = net3 > 0 ? net3 : 0;
    this.data.totalPlata_A = venit3 + chelt3 + net3;
    this.postData = JSON.parse(JSON.stringify(this.data));
    this.postData.childNodes.push(this.postData.childNodesPre);
    delete this.postData.childNodesPre;
    this.loading = true;
    this.response = '';

    this.dService.sendData(this.postData).then(response => {
      this.loading = false;
      this.response = JSON.parse(response["_body"]);

      if(this.response['fileId'] != '') {
        this.pdfId = this.response['fileId']
      }
    })
  }
}
