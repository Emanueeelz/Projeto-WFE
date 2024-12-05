import { Component } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component'
import { CorpoSiteComponent } from './corpo-site/corpo-site.component'
import { RodapeComponent } from './rodape/rodape.component';
import { ReceitaComponent } from "./receita/receita.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CabecalhoComponent, CorpoSiteComponent, RodapeComponent, ReceitaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto_wfe';
}
