import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReceitaComponent} from '../receita/receita.component'

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  standalone: true,
  imports: [ReceitaComponent],
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() imagem: string = '';
  @Input() favorito: boolean = false;
  @Output() favoritarEvento = new EventEmitter<boolean>();

  alterarFavorito() {
    this.favorito = !this.favorito;
    this.favoritarEvento.emit(this.favorito);
  }
}
