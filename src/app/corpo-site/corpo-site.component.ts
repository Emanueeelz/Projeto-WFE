import { Component } from '@angular/core';
import { CartaoComponent } from '../cartao/cartao.component'

@Component({
  selector: 'app-corpo-site',
  standalone: true,
  imports: [CartaoComponent],
  templateUrl: './corpo-site.component.html',
  styleUrl: './corpo-site.component.css'
})
export class CorpoSiteComponent {
  receitas = [
    {
      titulo: "teste",
      descricao: "teste",
      imagem: "/logo.png"
    }, {
      titulo: "tal tal tal",
      descricao: "luffy",
      imagem: "https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png"
    }, {
      titulo: "super sayajin",
      descricao: "goku",
      imagem: "https://e7.pngegg.com/pngimages/822/663/png-clipart-goku-dragon-ball-desktop-4k-resolution-goku-fictional-character-cartoon.png"
    }
  ]
}
