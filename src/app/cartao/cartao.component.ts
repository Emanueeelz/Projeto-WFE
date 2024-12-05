import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartao',
  standalone: true,
  imports: [],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.css'
})
export class CartaoComponent {
  @Input() titulo: string=''; // decorate the property with @Input()
  @Input() descricao: string='';
  @Input() imagem: string='';
}
