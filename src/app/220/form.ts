import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormlyModule, FormlyFieldConfig, FormlyBootstrapModule, Field, FieldWrapper} from '../../formly';

interface FormType {
  title: string,
  group: FormGroup,
  data: any,
  fields: FormlyFieldConfig[]
}

@Component({
  selector: 'd220',
  styleUrls: ['./form.scss'],
  templateUrl: './form.html'
})
export class Form {
  form220: FormType[];

  constructor(fb: FormBuilder) {
    this.form220 = [{
      title: 'I. Date de identificare a contribuabilului',
      group: fb.group({}),
      data: {},
      fields: [{
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
      }]
    },{
      title: 'II. Date privind activitatea desfasurata',
      group: fb.group({}),
      data: {},
      fields: [{
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
      }]
    }, {
      title: 'III. Date privind venit estimat',
      group: fb.group({}),
      data: {},
      fields: [{
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
      }]
    }];
  }
}
