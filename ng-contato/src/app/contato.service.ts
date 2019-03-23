import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  endPoint: string = "api/contatos";
  lista: Contato[] = []
  
  constructor() { }

  getContato(): Contato[]{
      return this.lista ;
  }

  saveContato(contato: Contato){
      if(contato.id != null){
        this.lista.splice(contato.id-1,1,contato); 
      }
      else
      {
        contato.id = this.lista.length+1;
        this.lista.push(contato);
      }
      //console.log(contato);
  }

  excluiContato(contato: Contato){
      //console.log(contato);
      this.lista.splice(contato.id-1,1);
  }
}
