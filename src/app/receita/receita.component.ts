import { Component, Input, input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receita',
  standalone: true,
  imports: [],
  templateUrl: './receita.component.html',
  styleUrl: './receita.component.css'
})

// Requisito mínimo: @Input
// Requisito mínimo: @Output
export class ReceitaComponent {
  @Input() favoritar: boolean = false;
  @Output() newItemEvent = new EventEmitter<boolean>();
  @Input() imagem: string = '';
  @Input() receita: string = '';
}
