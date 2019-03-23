import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(private ContatoService: ContatoService) { }

  @Output()
  contatoSelecionadoEvento: EventEmitter<any> = new EventEmitter();
  listaContato: Contato[] = [];
  
  ngOnInit() {
    this.listaContato = this.ContatoService.getContato();
  }

  onSelecionado(contato: Contato){
      this.contatoSelecionadoEvento.emit(contato);
  }

  onDelete(contato: Contato){
      this.ContatoService.excluiContato(contato);
      this.contatoSelecionadoEvento.emit(null);
  }


}
