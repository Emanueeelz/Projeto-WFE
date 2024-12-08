// Requisito mínimo = Componente (Receita)
import { Component, Input, input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receita',
  standalone: true,
  imports: [],
  templateUrl: './receita.component.html',
  styleUrl: './receita.component.css'
})
export class ReceitaComponent {
  @Input() favoritar: boolean = false;
  @Output() newItemEvent = new EventEmitter<boolean>();
}
