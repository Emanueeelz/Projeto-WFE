import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CabecalhoComponent} from './cabecalho/cabecalho.component'
import {CorpoSiteComponent} from './corpo-site/corpo-site.component'
import { RodapeComponent} from './rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, CorpoSiteComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto_wfe';
}
