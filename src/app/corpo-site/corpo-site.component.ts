import { Component } from '@angular/core';
import {CartaoComponent} from '../cartao/cartao.component'

@Component({
  selector: 'app-corpo-site',
  standalone: true,
  imports: [CartaoComponent],
  templateUrl: './corpo-site.component.html',
  styleUrl: './corpo-site.component.css'
})
export class CorpoSiteComponent {

}
