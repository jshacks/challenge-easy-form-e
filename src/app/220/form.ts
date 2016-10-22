import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormlyModule, FormlyFieldConfig, FormlyBootstrapModule, Field, FieldWrapper} from '../../formly';

@Component({
  selector: 'd220',
  styleUrls: ['./form.scss'],
  templateUrl: './form.html'
})
export class Form {
  group: FormGroup;
  fields: FormlyFieldConfig[];

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
    'd_rec': 0, // n1 da . nu exista
    'nume_declar': 'Declar Vasile', // c75 da .
    'prenume_declar': 'Declar prenume vasile', // c75 da .
    'functie_declar': 'Administrator', // c50 da .
    'totalPlata_A': 0, // n15 da

    'nume': 'Gigi becali', // I. c75 da
    'cif': 2970714332237, // n13 da
    'adresa': 'Strada turturica vesela', // c200
    'telefon': '021345678', // c15
    'fax': 9887654412, // c15
    'email': 'gogu@example.com', // c200

    'den_r': 'Sfantu Petru', // IV. c75
    'cif_r': 34983363, // n13
    'adresa_r': 'Cucuietii din deal', // c200
    'telefon_r': '0213456', // c15
    'fax_r': '021345678', // c15
    'email_r': 'gogu@example.com', // c200

    'childNodes': [{
      'tagName': 'activitate',

      'categ_venit': 4, // II. n1 da
      'det_venit': 1, // n1 da
      'forma_org': 2, // n1 da
      'CAEN': 6202, // c4
      'judet': '03', // n2
      'localitate': 'PITESTI', // c50
      'sector': 1, // n1
      'sediu': 'Aleea Cucului', // c200
      'tip_doc': 3, // n1
      'nr_doc': 2, // n11
      'data_doc': '12.10.2016', // d10
      'data_I': '12.10.2016', // d10
      'data_F': '22.10.2016', // d10
      'data_S': '22.10.2016', // d10
      'nr_zile': 4, // n3

      'net3': 0, // n15 da
      'chelt3': 0, // n15 da
      'venit3': 0, // n15 da
    }],
  };
  constructor(fb: FormBuilder) {
    this.group = fb.group({});
    this.fields = [{
      template: '<h4>Configurari generale</h4>'
    }, {
      key: 'an',
      type: 'input',
      templateOptions: {
        label: 'Anul',
        type: 'number'
      },
      validation: Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(4)])
    }, {
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
      key: 'd_rec2',
      type: 'checkbox',
      templateOptions: {
        label: '2. Modificarea modului de determinare a venitului net'
      },
      validation: Validators.compose([Validators.required])
    }, {
      key: 'stat_pensie',
      type: 'input',
      templateOptions: {
        label: '3. Venituri din pensii din strainatate realizate in statul:',
        type: 'number' // @todo: de facut selector dupa nomenclator tari
      },
      validation: Validators.compose([Validators.required])
    }, {
      template: '<h3>Sub sanctiunile aplicate faptei de fals in acte publice, declar ca datele inscrise in acest formular sunt corecte si complete.</h3>'
    }, {
      key: 'nume_declar',
      type: 'input',
      templateOptions: {
        label: 'Nume'
      },
      validation: Validators.compose([Validators.required, Validators.maxLength(75)])
    }, {
      key: 'prenume_declar',
      type: 'input',
      templateOptions: {
        label: 'Prenume'
      },
      validation: Validators.compose([Validators.required, Validators.maxLength(75)])
    }, {
      key: 'functie_declar',
      type: 'input',
      templateOptions: {
        label: 'Functia'
      },
      validation: Validators.compose([Validators.required, Validators.maxLength(50)])
    }, {
      template: '<h4>I. Date de identificare a contribuabilului</h4>'
    }, {
      key: 'nameAndSurname',
      type: 'input',
      templateOptions: {
        label: 'Nume si Prenume'
      }
    }, {
      key: 'cnp',
      type: 'input',
      templateOptions: {
        label: 'CNP / NIF',
        placeholder: 'SAALLDDXXXXXXX',
        type: 'number'
      }
    }, {
      key: 'address',
      type: 'input',
      templateOptions: {
        label: 'Adresa (Strada, Numar, Bloc, Scara, Etaj, Ap., Judet / Sector, Localitate, Cos postal)'
      }
    }, {
      key: 'phone',
      type: 'input',
      templateOptions: {
        label: 'Telefon',
        type: 'number'
      }
    }, {
      key: 'fax',
      type: 'input',
      templateOptions: {
        label: 'Fax',
        type: 'number'
      }
    }, {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'E-mail',
        type: 'email'
      }
    }, {
      template: '<h4>II. Date privind activitatea desfasurata</h4>'
    }, {
      key: 'incomeCategory',
      type: 'input',
      templateOptions: {
        label: 'Categoria de venit'
      }
    }, {
      key: 'underFive',
      type: 'checkbox',
      templateOptions: {
        label: 'sub 5 contracte',
      }
    }, {
      key: 'overFive',
      type: 'checkbox',
      templateOptions: {
        label: 'peste 5 contracte',
      }
    }, {
      key: 'turisticScope',
      type: 'checkbox',
      templateOptions: {
        label: 'in scop turistic',
      }
    }, {
      key: 'nrOfRooms',
      type: 'input',
      templateOptions: {
        label: 'Numar camere',
        type: 'number'
      }
    }, {
      key: 'netIncome',
      type: 'input',
      templateOptions: {
        label: '2. Determinarea venitului net',
        placeholder: '1. Sistem real'
      }
    }, {
      key: 'organizationForm',
      type: 'input',
      templateOptions: {
        label: '3. Forma de organizare',
        placeholder: '1. Individual'
      }
    }, {
      key: 'activityScope',
      type: 'input',
      templateOptions: {
        label: '4. Obiectivul principal de activitate (cod si denumire clasa CAEN)',
      }
    }, {
      key: 'location',
      type: 'input',
      templateOptions: {
        label: '5. Sediul / Datele de identificare ale bunului pentru care se cedeaza folosinta (Strada, Numar, Bloc, Scara, Etaj, Ap., Cod postal)',
      }
    }, {
      key: 'county',
      type: 'input',
      templateOptions: {
        label: 'Judet',
      }
    }, {
      key: 'locality',
      type: 'input',
      templateOptions: {
        label: 'Localitate',
      }
    }, {
      key: 'Sector',
      type: 'input',
      templateOptions: {
        label: 'Sector',
        type: 'number'
      }
    }, {
      key: 'autorizationDocument',
      type: 'input',
      templateOptions: {
        label: 'Documentul de autorizare / Contractul de asociere / inchiriere',
        placeholder: '... Selectati tipul documentului (daca e cazul) ...'
      }
    }, {
      key: 'autorizationDocumentNr',
      type: 'input',
      templateOptions: {
        label: 'Nr.',
        type: 'number'
      }
    }, {
      key: 'autorizationData',
      type: 'input',
      templateOptions: {
        label: 'Data (zz.ll.aaaa)',
      }
    }, {
      key: 'startDate',
      type: 'input',
      templateOptions: {
        label: '7. Data inceperii activitatii',
      }
    }, {
      key: 'endDate',
      type: 'input',
      templateOptions: {
        label: '8. Data incetarii activitatii',
      }
    }, {
      key: 'pauseDate',
      type: 'input',
      templateOptions: {
        label: '9. Data suspendarii activiatii',
      }
    }, {
      key: 'nrOfDays',
      type: 'input',
      templateOptions: {
        label: '10. Numar zile de scutire ***)',
        type: 'number'
      }
    }, {
      key: 'endDateForCAS',
      type: 'input',
      templateOptions: {
        label: '11. Data incetarii obligatiei de plata a CAS ****)',
      }
    }, {
      template: '<h4>III. Date privind venitul estimat</h4>'
    }, {
      key: 'field1',
      type: 'input',
      templateOptions: {
        label: '1. Venit brut estimat',
        type: 'number'
      }
    }, {
      key: 'field2',
      type: 'input',
      templateOptions: {
        label: '2. Cheltuieli deductibile estimate',
        type: 'number'
      }
    }, {
      key: 'field3',
      type: 'input',
      templateOptions: {
        label: '3. Venit net estimat (rd.1 - rd.2)',
        type: 'number'
      }
    }, {
      template: '<h4>IV. Date de identificare a imputernicitului</h4>'
    }, {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Nume, prenume / Denumire',
      }
    }, {
      key: 'cnp',
      type: 'input',
      templateOptions: {
        label: 'Cod de identificare fiscala (CF / CNP)',
      }
    }, {
      key: 'address',
      type: 'input',
      templateOptions: {
        label: 'Adresa (Strada, Numar, Bloc, Scara, Etaj, Ap., Judet / Sector, Localitate, Cod postal)',
      }
    },{
      key: 'phone',
      type: 'input',
      templateOptions: {
        label: 'Telefon',
      }
    },{
      key: 'fax',
      type: 'input',
      templateOptions: {
        label: 'Fax',
      }
    },{
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'E-mail',
      }
    }];
  }
}
