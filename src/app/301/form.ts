import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormlyModule, FormlyFieldConfig, FormlyBootstrapModule, Field, FieldWrapper} from '../../formly';
import {Declaratia310Service} from '../services/declaratieService';

@Component({
  selector: 'd301',
  styleUrls: ['./form.scss'],
  templateUrl: './form.html'
})
export class Form {
    form: FormGroup;
    userFields: FormlyFieldConfig[];

    response: string;
    pdfId: string;
    loading: boolean = false;
    butonGenerare: string = 'Generare';

    user: any = {
        "tva5": 0,
        "cif": 34983363,
        "tva3": 0,
        "tva4": 0,
        "tva1": 0,
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
        "baza1": 0,
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
        "mijl_trans": 0,
        "denumire": "Baubau srl",
        "prenume_declarant": "Becali",
        "banca": "Pusculita"
    }

    achizitiiBunuriTaxabile = [
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
    ]

    constructor(fb: FormBuilder, private dService: Declaratia310Service) {
        this.form = fb.group({});

        this.userFields = [{
            className: 'col-xs-12',
            key: 'luna',
            type: 'input',
            templateOptions: {
                label: "pentru luna",
                placeholder: "ex: 1"
            }
        }, {
            className: 'col-xs-12',
            key: 'an',
            type: 'input',
            templateOptions: {
                label: "anul",
                placeholder: "ex: 2016"
            }
        }, {
            className: 'col-xs-12',
            key: 'd_rec',
            type: 'checkbox',
            templateOptions: {
                label: "Declaratie rectificativa",
                placeholder: ""
            }
        }, {
            className: 'col-xs-12',
            key: 'mijl_trans',
            type: 'checkbox',
            templateOptions: {
                label: "Declaratie pentru achizitii intracomunitare de mijloace de transport noi",
                placeholder: ""
            }
        }, {
            className: 'col-xs-12',
            type: 'radio',
            key: 'temei',
            templateOptions: {
                options: [{
                    key: 1,
                    value: '-articolul 105. (6) litera a) din Legea nr.207/2015 privind Codul de procedura fiscala, cu modificarile si completarile ulterioare'
                }, {
                    key: 2,
                    value: '-articolul 105. (6) litera b) din Legea nr.207/2015 privind Codul de procedura fiscala, cu modificarile si completarile ulterioare'
                }],
                label: 'Temeiul legal pentru depunerea formularului 301 dupa anularea rezervei verificarii ulterioare:',
            }
        }, {
            className: 'col-xs-12',
            template: "<div><strong> DATELE DE IDENTIFICARE A PERSOANEI IMPOZABILE</div>"
        }, {
            className: 'col-xs-12',
            key: 'cif',
            type: 'input',
            templateOptions: {
                label: "Cod de indentificare fiscala",
                placeholder: ""
            }
        }, {
            className: 'col-xs-12',
            key: 'denumire',
            type: 'input',
            templateOptions: {
                label: "Denumire / Nume, Prenume",
                placeholder: ""
            }
        }, {
            className: 'col-xs-12',
            template: "<div> Domiciliu fiscal</div>"
        }, {
            className: 'col-xs-12',
            key: 'adresa',
            type: 'input',
            templateOptions: {
                label: "Adresa (judet ,localit.,str.,disabled.,scara,ap.,cod postal,sector)",
                placeholder: ""
            }
        }, {
            className: 'col-xs-12',
            key: 'telefon',
            type: 'input',
            templateOptions: {
                label: "Telefon",
                placeholder: ""
            }
        }, {
            className: 'col-xs-12',
            key: 'fax',
            type: 'input',
            templateOptions: {
                label: "Fax",
                placeholder: ""
            }
        }, {
            className: 'col-xs-12',
            key: 'email',
            type: 'input',
            templateOptions: {
                label: "E-mail",
                placeholder: ""
            }
        }, {
            className: 'col-xs-12',
            key: 'banca',
            type: 'input',
            templateOptions: {
                label: "Banca",
                placeholder: ""
            }
        }, {
            className: 'col-xs-12',
            key: 'cont',
            type: 'input',
            templateOptions: {
                label: "Cont",
                placeholder: ""
            }
        }, {
            className: 'col-xs-12',
            type: 'radio',
            key: 'pers_inreg',
            templateOptions: {
                options: [{
                    key: 1,
                    value: 'Persoane care nu sunt inregistrate in scopuri TVA'
                }, {
                    key: 2,
                    value: 'Persoane care sunt inregistrate conform art. 317 din Legea nr. 227/2015 privind Codul fiscal, cu modificarile si completarile ulterioare'
                }],
                label: '',
            }
        }, {
            className: 'col-xs-12',
            template: "<div> Prezenta delcaratie constituie titlul de creanta si produce efecte juridice...</div>"
        }, {
            className: 'col-xs-12',
            key: 'nume_declarant',
            type: 'input',
            templateOptions: {
                label: "Nume",
                placeholder: ""
            }
        }, {
            className: 'col-xs-12',
            key: 'prenume_declarant',
            type: 'input',
            templateOptions: {
                label: "Prenume",
                placeholder: ""
            }
        }, {
            className: 'col-xs-12',
            key: 'functia_declarant',
            type: 'input',
            templateOptions: {
                label: "Functia",
                placeholder: ""
            }
        }, {
            className: 'col-xs-12',
            template: "<div><strong> DATE PRIVIND OBLIGATIA DE PLATA </div>"
        }, {
            className: 'col-xs-12',
            template: "<div> Sectiunea 1. Achizitii intracomunitare de bunuri taxabile    -lei </div>"
        }]
    }

    postProcess() {
        this.user.childNodes = []
        for (let node of this.achizitiiBunuriTaxabile) {
            node.baza = node.val_valuta * node.curs_valutar
            this.user.baza1 += node.baza
            this.user.tva1 += node.tva
            this.user.childNodes.push(node)
        }
        // computing control sum
        this.user.totalPlata_A = this.user.baza1 + this.user.tva1
        this.user.totalPlata_A = Math.round(this.user.totalPlata_A)
        let next_month = this.user.luna + 1
        if (next_month < 10) {
            next_month = '0' + next_month
        }

        let this_month = this.user.luna
        if (this_month < 10) {
            this_month = '0' + this_month
        }
        this.user.nr_evid = `1030101${this_month}${this.user.an % 100}25${next_month}${this.user.an % 100}${this.user.mijl_trans}000`

        let control = this.user.nr_evid.split('').reduce((sum, character)=> sum += +character, 0)
        if (control < 10) {
            control = '0' + control
        } else {
            if (control > 99) {
                control = control % 100;
            }
        }
        this.user.nr_evid += control

        //  10301010516250616000038
        this.loading = true;
        this.butonGenerare = 'Regenerare';
        this.response = '';

        this.dService.sendData(this.user).then(response => {
            this.loading = false;
            this.response = JSON.parse(response["_body"]);

            if (this.response['fileId'] != '') {
                this.pdfId = this.response['fileId']
            }
        })
    }

    addAchizitie() {
        this.achizitiiBunuriTaxabile.push({
            "val_valuta": 0,
            "data_doc": "",
            "nr_doc": 0,
            "tip_valuta": "",
            "baza": 0,
            "tagName": "",
            "tip_operatie": 1,
            "curs_valutar": 0,
            "tva": 0
        })
    }
}
