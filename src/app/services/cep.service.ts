import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Cep } from '../models/cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(
    private http:HttpClient
  ) { }
 
  buscar(cep:string){
   return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
       .toPromise()
      .then(response => {
          return this.converterRespostaParaCep(response)
    })
  }
  private converterRespostaParaCep(cepResposta): Cep{
    let cep = new Cep();
    cep.cep = cepResposta.cep;
    cep.logradouro = cepResposta.logradouro;
    cep.complemento = cepResposta.complemento;
    cep.bairro = cepResposta.bairro;
    cep.cidade = cepResposta.localidade;
    cep.estado = cepResposta.uf;
    return cep;

  }

}
