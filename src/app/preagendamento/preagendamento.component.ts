import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';
import { CepService } from '../services/cep.service';
import { Cep } from 'src/app/models/cep';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import emailMask from 'text-mask-addons/dist/emailMask';

@Component({
  selector: 'app-preagendamento',
  templateUrl: './preagendamento.component.html',
  styleUrls: ['./preagendamento.component.scss']
})
export class PreagendamentoComponent implements OnInit {
  emailMask = emailMask;
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
    private router: Router,
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
        recaptchaLogin: ['', [Validators.required]],
        email: ['', [Validators.required]],

      });
  }

  ngOnInit(): void {
  }

 salvar(){
  Swal.fire({
    title: `Você confirma o agendamento?`,
    text: "Esta ação não poderá ser revertida!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, confirmo!',
    cancelButtonText: 'Cancelar'}).then((result) => {
      if (result.isConfirmed) {
        let rota;
         rota = '/conclusao';
         this.router.navigate([rota]);
      }
    })
 }

  buscarCep(){
    this.cepService.buscar(this.cep.cep)
    .then((cep:Cep) => this.cep = cep);
      
  }

}
