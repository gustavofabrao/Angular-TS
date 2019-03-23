import { Component, OnInit, Input, SimpleChanges, OnChanges, Injectable, Inject, NgModule } from '@angular/core';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';
import {NgxMaskModule} from 'ngx-mask';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

@NgModule({
  imports: [
    NgxMaskModule.forRoot()
  ]
})

export class RegistroComponent implements OnInit, OnChanges {

  formContato: FormGroup;

  @Input()
  contatoSelecionado: Contato;

  constructor(private fb: FormBuilder, 
              private ContatoService : ContatoService) { 
    this.formContato = fb.group({
      id: [],
      nome: ['',[Validators.required, Validators.maxLength(16)]],
      cpf: ['',[Validators.required, Validators.pattern("^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\.[0-9]{2}$")]],
      email: ['',[Validators.required, Validators.email]], 
      fone: ['',[Validators.maxLength(9), Validators.pattern("[0-9]+")]],
      endereco: [],
      cidade: ['',[Validators.required, Validators.maxLength(16)]],
      estado: ['',[Validators.required]],
      cep: ['',[Validators.required, Validators.pattern("\\d{5}-\\d{3}")]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes["contatoSelecionado"]){
          if(this.contatoSelecionado){
              this.formContato.setValue(this.contatoSelecionado);
              
          }
          else
          {
            this.formContato.reset();
          }
      }
  }

  ngOnInit() {
  }

  onSave(){
     if(this.formContato.invalid){
       //console.log(this.formContato.controls.nome.errors);
       alert("Formulário inválido!");
       return;
     }
    const contato: Contato = <Contato>this.formContato.value;
    this.ContatoService.saveContato(contato);
    this.formContato.reset();
  }

  validaForm(campo){
    return !this.formContato.get(campo).valid && this.formContato.get(campo).touched
  }

  aplicaCssErro(campo){
    return {
          'has-error': this.validaForm(campo),
          'has-feedback': this.validaForm(campo)
          }
  }


}
