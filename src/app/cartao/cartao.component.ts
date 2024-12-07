// Requisito mínimo = Componente (Cartão)
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartao',
  standalone: true,
  imports: [],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.css'
})
// Requisito mínimo = @Input
export class CartaoComponent {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() imagem: string = '';
}
