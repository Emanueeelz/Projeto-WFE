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
      titulo: "Strawberry Shortcake",
      descricao: "O bolo da justiça!!!",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TkfS46zqtBFrS-IwBLOclW2Uni7Pc4E8_90bIkgeqM8mbDtr"
    }, {
      titulo: "Lámen",
      descricao: "Um jeito ninja de ser.",
      imagem: "https://i.redd.it/5pugcw254ol41.jpg"
    }, {
      titulo: "Bentô",
      descricao: "Para os intervalos escolares.",
      imagem: "https://cdn.myanimelist.net/s/common/uploaded_files/1450215038-51def10635914a9d9d5cf9477f28b142.png"
    }, {
      titulo: "Curry Japonês",
      descricao: "Vale 100 milhões de berries.",
      imagem: "https://i.pinimg.com/736x/4f/ad/32/4fad3231040b46d7e5e413b06bfdc2da.jpg"
    }, {
      titulo: "Takoyaki",
      descricao: "Exclusivo para Nami-san.",
      imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2p8imoIyD1BkWKh1_B3f9tJU2xqTzvJmpVCTu1j90YFQ75oOB7LVcTfjR-oKTE42BTe22ydSePA-PFX9mKF2vu_hLK5O8XRtHZLBrfMapMrmABNqGiyChr_dqupTWt3TCRi7Mbfv5L55y/s1600/takoyaki-ookami-shoujo-to-kuro-ouji-08-01.png"
    }, {
      titulo: "Dango",
      descricao: "Sobreviva no Exame 'Chuunin'.",
      imagem: "https://64.media.tumblr.com/654c137ba23af1e826382ee7531fbc13/tumblr_n7593gCm4X1t2rr2bo1_1280.pnj"
    }, {
      titulo: "Onigiri",
      descricao: "Bom para viagens, tipo 'Chihiro'.",
      imagem: "https://i.pinimg.com/originals/41/28/58/412858a0e5152d67ac42e5add90c8e40.jpg"
    }, {
      titulo: "Nikuman",
      descricao: "Apenas com licença 'Hunter'.",
      imagem: "https://i.pinimg.com/originals/c0/09/5b/c0095b5252f1776a017c101802051fba.png"
    }
  ]
}
