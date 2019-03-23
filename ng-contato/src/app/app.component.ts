import { Component } from '@angular/core';
import { Contato } from './contato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-contato';
  contatoSelecionado: Contato;

  onSelecionarContato(contato: Contato){
    //console.log(contato);
    this.contatoSelecionado = contato;
  }
}
