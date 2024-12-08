// Requisito mínimo = Componente (Contato)
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  @Input() nome: string =''
  @Input() github: string =''
  @Input() email: string =''
  @Input() foto: string =''
}