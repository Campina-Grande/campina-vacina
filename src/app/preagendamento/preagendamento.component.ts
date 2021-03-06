import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';
import { CepService } from '../services/cep.service';
import { Cep } from 'src/app/models/cep';

@Component({
  selector: 'app-preagendamento',
  templateUrl: './preagendamento.component.html',
  styleUrls: ['./preagendamento.component.scss']
})
export class PreagendamentoComponent implements OnInit {

  form: FormGroup;
  cep = new Cep();
  
  // constructor() {
  //   this.sampleForm = return new FormGroup({
  //     personalData: new FormGroup({
  //       money: new FormControl('', [this.validateBrService.decimal]),
        
  //       cnpj: new FormControl('', [ this.validateBrService.cnpj])
  //     }),
  //     url: new FormControl('', [this.validateBrService.url]),
  //     number: new FormControl('', this.validateBrService.integer)
  //   });
  // }

  constructor(
    private _validateBr: ValidateBrService,
    private fb: FormBuilder,
    private cepService: CepService
    ) {
      this.form = this.fb.group({
        cpf: new FormControl('', [this._validateBr.cpf]),
        cep: ['', [Validators.required]],
        logradouro: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        uf: ['', [Validators.required]],
        recaptchaLogin: ['', [Validators.required]]

      });
  }

  ngOnInit(): void {
  }

  buscarCep(){
    this.cepService.buscar(this.cep.cep)
    .then((cep:Cep) => this.cep = cep);
      
  }

}
