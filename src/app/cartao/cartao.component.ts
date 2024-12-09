// Requisito mínimo = Componente (Cartao)
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

  id: number = Math.floor(Math.random() * 1000);
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() imagem: string = '';
  @Input() favorito: boolean = false;
  @Output() favoritarEvento = new EventEmitter<boolean>();
  @Input() receita: string = '';
  @Input() imagemReal: string = '';

  alterarFavorito() {
    this.favorito = !this.favorito;
    this.favoritarEvento.emit(this.favorito);
  }
}
