// Requisito mínimo = Componente (Corpo do Site)
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
      favorito: false,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TkfS46zqtBFrS-IwBLOclW2Uni7Pc4E8_90bIkgeqM8mbDtr",
      receita: `
      Receita de Strawberry Shortcake
 Ingredientes:
 - 4 ovos (separar gemas e claras)
 - 120g de açúcar
 - 120g de farinha de trigo
 - 1 colher de chá de essência de baunilha

 Para o chantilly:
 - 400ml de creme de leite fresco (gelado)
 - 50g de açúcar de confeiteiro
 - 1 colher de chá de essência de baunilha

 Para o recheio e decoração:
 - 300g de morangos frescos
 - Açúcar de confeiteiro

 Modo de Preparo:
 - Bata claras em neve e adicione o açúcar aos poucos até formar merengue.
 - Acrescente as gemas e a baunilha, batendo em velocidade baixa.
 - Misture a farinha peneirada delicadamente e asse em forma untada (180°C por 25-30 minutos).
 - Deixe esfriar e corte ao meio.

 Chantilly:
 - Bata o creme de leite, açúcar e baunilha até formar picos firmes.

 Montagem:
 - Coloque uma camada de bolo, cubra com chantilly e fatias de morango.
 - Adicione a outra camada, cubra com chantilly e decore com morangos inteiros e açúcar de confeiteiro.

 Tempo Total:
 - 1h30min (Preparo: 1h / Montagem: 30min)

 Dificuldade:
 - 3/5 (intermediário)`
    }, {
      titulo: "Lámen",
      descricao: "Um jeito ninja de ser.",
      favorito: false,
      imagem: "https://i.redd.it/5pugcw254ol41.jpg"
      , receita: `
      Receita de Lámen
 Ingredientes:
 - 200g de macarrão para lámen (ou talharim fresco)
 - 1 ovo cozido
 - 150g de lombo de porco (fatiado)
 - 1 colher de sopa de óleo de gergelim
 - 1 colher de sopa de shoyu (molho de soja)
 - 1 colher de chá de missô (pasta de soja)
 - 750ml de caldo (frango ou porco)
 - Cebolinha picada a gosto
 - 1 folha de nori (alga seca)
 - 1 fatia de naruto (massa de peixe em espiral rosa)

 Modo de Preparo:
 - Caldo: Aqueça o caldo em fogo médio, misture o missô, shoyu e óleo de gergelim. Mexa bem e mantenha aquecido.
 - Macarrão: Cozinhe o macarrão em água fervente até ficar al dente. Escorra e reserve.
 - Porco: Grelhe o lombo até dourar levemente.

 Montagem:
 - Coloque o macarrão em uma tigela grande.
 - Despeje o caldo quente por cima.
 - Adicione o lombo, ovo cortado ao meio, fatia de naruto, nori e cebolinha.

 Tempo Total:
 - 40 minutos

 Dificuldade:
 - 2/5 (fácil, exige apenas montagem cuidadosa)`
    }, {
      titulo: "Bentô",
      descricao: "Para os intervalos escolares.",
      favorito: false,
      imagem: "https://cdn.myanimelist.net/s/common/uploaded_files/1450215038-51def10635914a9d9d5cf9477f28b142.png"
      , receita: `
      Receita de Bentô Tradicional
 Ingredientes:
 - 1 xícara de arroz japonês cozido (gohan)
 - 1 colher de chá de gergelim torrado

 Proteína:
 - 150g de frango ou salmão grelhado (temperado com shoyu e gengibre)

 Acompanhamentos:
 - 2 ovos (para tamagoyaki - omelete japonês)
 - 50g de brócolis cozido no vapor
 - 3 tomates-cereja
 - 1 fatia de nori (opcional)

 Modo de Preparo:
 - Base: Cozinhe o arroz japonês e tempere com gergelim torrado. Reserve.
 - Proteína: Tempere e grelhe o frango ou salmão até dourar.

 Acompanhamentos:
 - Prepare o tamagoyaki: Bata os ovos, adicione uma pitada de açúcar e shoyu, e cozinhe em camadas finas numa frigideira, enrolando para formar um rolo. Corte em pedaços.
 - Cozinhe o brócolis no vapor até ficar macio.

 Montagem:
 - Coloque o arroz em um lado da marmita.
 - Disponha a proteína e os acompanhamentos ao lado, separando com divisórias (ou folhas de alface, se preferir).
 - Decore com nori ou outros enfeites comestíveis.

 Tempo Total:
 - 40 minutos

 Dificuldade:
 - 3/5 (nível intermediário, requer habilidade para o tamagoyaki e apresentação cuidadosa).`
    }, {
      titulo: "Curry Japonês",
      descricao: "Vale 100 milhões de berries.",
      favorito: false,
      imagem: "https://i.pinimg.com/736x/4f/ad/32/4fad3231040b46d7e5e413b06bfdc2da.jpg"
      , receita: `
      Receita de Curry Japonês
 Ingredientes:
 - 400g de carne (fraldinha ou coxão mole)
 - 250g de cebola picada
 - 150g de cenoura em cubos
 - 300g de batatas em cubos
 - 2 colheres de sopa de óleo
 - 1 tablete de Golden Curry
 - 800ml de água

 Acompanhamento:
 - Arroz japonês (gohan) ou arroz branco comum

 Modo de Preparo:
 - Em uma frigideira funda, aqueça o óleo e doure a carne.
 - Acrescente a cebola e refogue até dourar. Reserve.
 - Cozinhe as batatas e cenouras na água até ficarem macias.
 - Adicione a carne com cebola à panela dos legumes e misture.
 - Acrescente o Golden Curry e mexa até dissolver e o caldo engrossar.

 Montagem:
 - Sirva o curry sobre o arroz quente ou ao lado.

 Tempo Total:
 - 1 hora

 Dificuldade:
 - 2/5 (fácil, com preparo simples).`
    }, {
      titulo: "Takoyaki",
      descricao: "Exclusivo para Nami-san.",
      favorito: false,
      imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2p8imoIyD1BkWKh1_B3f9tJU2xqTzvJmpVCTu1j90YFQ75oOB7LVcTfjR-oKTE42BTe22ydSePA-PFX9mKF2vu_hLK5O8XRtHZLBrfMapMrmABNqGiyChr_dqupTWt3TCRi7Mbfv5L55y/s1600/takoyaki-ookami-shoujo-to-kuro-ouji-08-01.png"
      , receita: `
      Receita de Takoyaki
 Ingredientes:
 - 250g de farinha para takoyaki
 - 2 ovos
 - 600ml de caldo dashi (caldo de peixe)
 - 200g de polvo cozido em pedaços pequenos
 - 100g de cebolinha picada
 - 100g de gengibre em conserva picado
 - Óleo para untar a chapa
 - Molho para takoyaki (ou molho inglês com um toque de açúcar)
 - Maionese japonesa (opcional)
 - Flocos de bonito (katsuobushi)
 - Alga nori picada

 Modo de Preparo:
 - Em uma tigela, misture a farinha, ovos e o caldo dashi até formar uma massa líquida homogênea.
 - Aqueça a chapa para takoyaki e unte com óleo.
 - Preencha as cavidades da chapa com a massa, deixando espaço no centro para os recheios.
 - Adicione pedaços de polvo, cebolinha e gengibre em cada cavidade.
 - Com a ajuda de palitos ou espetos, vire os takoyakis enquanto cozinham para formar bolinhos redondos.

 Montagem:
 - Retire os takoyakis da chapa e coloque-os em um prato.
 - Cubra com molho para takoyaki, maionese japonesa, flocos de bonito e alga nori.

 Tempo Total:
 - 30 minutos

 Dificuldade:
 - 3/5 (intermediário, exige atenção para virar os takoyakis na chapa).`
    }, {
      titulo: "Dango",
      descricao: "Sobreviva no Exame 'Chuunin'.",
      favorito: false,
      imagem: "https://64.media.tumblr.com/654c137ba23af1e826382ee7531fbc13/tumblr_n7593gCm4X1t2rr2bo1_1280.pnj"
      , receita: `
      Receita de Dango
 Ingredientes:
 - 100g de farinha de arroz glutinoso
 - 100g de farinha de arroz comum
 - 100ml de água morna

 Para o molho mitarashi:
 - 3 colheres de sopa de açúcar
 - 2 colheres de sopa de shoyu (molho de soja)
 - 2 colheres de sopa de mirin (saquê culinário)
 - 1 colher de chá de amido de milho diluído em 50ml de água

 Modo de Preparo:
 - Misture as farinhas e adicione água morna aos poucos, até formar uma massa lisa.
 - Divida em pequenas porções e molde bolinhas uniformes.
 - Cozinhe as bolinhas em água fervente até que flutuem, depois mergulhe em água gelada e escorra.

 Para o molho:
 - Em uma panela, misture açúcar, shoyu, mirin e o amido de milho diluído.
 - Cozinhe em fogo médio, mexendo, até engrossar.

 Montagem:
 - Espete 3 a 4 bolinhas em palitos.
 - Pincele o molho sobre os dangos e, se desejar, grelhe rapidamente para caramelizar.

 Tempo Total:
 - 30 minutos

 Dificuldade:
 - 2/5 (fácil, requer atenção na textura da massa e do molho).`
    }, {
      titulo: "Onigiri",
      descricao: "Bom para viagens, tipo 'Chihiro'.",
      favorito: false,
      imagem: "https://i.pinimg.com/originals/41/28/58/412858a0e5152d67ac42e5add90c8e40.jpg"
      , receita: `
      Receita de Onigiri
 Ingredientes:
 - 2 xícaras de arroz japonês (gohan) cozido
 - 1 colher de chá de sal
 - 1 folha de nori (alga seca), cortada em tiras

 Recheio (opcional):
 - 50g de atum (ou salmão) em conserva com maionese
 - 1 colher de chá de umeboshi (ameixa em conserva)

Modo de Preparo:
 - Cozinhe o arroz japonês e deixe esfriar um pouco.
 - Lave as mãos e unte com um pouco de sal para evitar que o arroz grude.
 - Modele pequenas porções de arroz em formato triangular ou redondo.
 - Se for usar recheio, abra um pequeno espaço no centro do arroz e coloque o recheio escolhido (atum, umeboshi, etc.).
 - Feche o arroz ao redor do recheio e molde novamente.

 Montagem:
 - Envolva cada onigiri com uma tira de nori ou deixe sem, dependendo da preferência.

 Tempo Total:
 - 30 minutos

 Dificuldade:
 - 2/5 (fácil, mas exige atenção ao molde e ao recheio).`
    }, {
      titulo: "Nikuman",
      descricao: "Apenas com licença 'Hunter'.",
      favorito: false,
      imagem: "https://i.pinimg.com/originals/c0/09/5b/c0095b5252f1776a017c101802051fba.png"
      , receita: `
      Receita de Nikuman
 Ingredientes:
 - 2 xícaras de farinha de trigo
 - 1/2 xícara de água morna
 - 1 colher de chá de fermento biológico seco
 - 1 colher de sopa de açúcar
 - 1 colher de sopa de óleo vegetal
 - 1/2 colher de chá de sal

 Recheio:
 - 300g de carne de porco moída
 - 1/4 de cebola picada
 - 1 colher de sopa de molho de soja (shoyu)
 - 1 colher de chá de óleo de gergelim
 - 1 colher de chá de gengibre ralado
 - 1 colher de sopa de açúcar
 - 1/2 colher de chá de pimenta branca (opcional)

 Modo de Preparo:
 - Dissolva o fermento e o açúcar na água morna e deixe descansar por 10 minutos até espumar.
 - Adicione a farinha, o óleo e o sal, misturando até formar uma massa. Sove até ficar macia e elástica. Deixe crescer por 1 hora ou até dobrar de tamanho.

 Recheio:
 - Em uma frigideira, refogue a cebola até dourar.
 - Adicione a carne moída, molho de soja, óleo de gergelim, gengibre e açúcar, cozinhando até a carne estar completamente cozida e bem temperada. Deixe esfriar.
 - Modele bolinhas pequenas com a massa, recheie com a mistura de carne e feche formando pequenos pãezinhos.
 - Coloque os pães em uma cesta ou papel manteiga e deixe crescer por 20 minutos.

 Cozimento:
 - Cozinhe os nikuman em uma panela a vapor por 15-20 minutos até ficarem macios e cozidos por dentro.

 Tempo Total:
 - 2 horas (incluindo tempo de fermentação)

Dificuldade:
 - 3/5 (intermediário, exige cuidado na preparação da massa e do recheio).`
    }, {
      titulo: "Sopa de Missô",
      descricao: "Um poder de mais de 8 mil!!",
      favorito: false,
      imagem: "https://contents.oricon.co.jp/photo/img/5000/5449/detail/img660/1582627272741.jpg"
      , receita: `
      Receita de Sopa de Missô
 Ingredientes:
 - 4 xícaras de caldo dashi (pode usar instantâneo)
 - 3 colheres de sopa de pasta de miso (shiro miso ou aka miso)
 - 100g de tofu cortado em cubos
 - 2 colheres de sopa de cebolinha picada
 - 1 colher de chá de alga wakame desidratada (opcional)

 Modo de Preparo:
 - Aqueça o caldo dashi em uma panela até ferver.
 - Dissolva a pasta de miso no caldo, mexendo bem até que se dissolva completamente.
 - Adicione os cubos de tofu e a alga wakame (se for usar). Cozinhe por mais 2-3 minutos, até que o tofu fique bem aquecido.
 - Desligue o fogo e adicione a cebolinha picada.

 Montagem:
 - Sirva a sopa imediatamente, quente.

 Tempo Total:
 - 15 minutos

 Dificuldade:
 - 1/5 (muito fácil, rápido e simples).`
    }, {
      titulo: "Gyoza",
      descricao: "Pasteizinhos do período 'Edo'.",
      favorito: false,
      imagem: "https://itadakimasuanime.wordpress.com/wp-content/uploads/2014/04/gyoza-natsuyuki-rendezvou-02-01.png"
      , receita: `
      Receita de Gyoza
 Ingredientes:
 - 300g de carne de porco moída
 - 1/2 xícara de repolho finamente picado
 - 2 colheres de sopa de cebolinha picada
 - 1 dente de alho picado
 - 1 colher de sopa de gengibre ralado
 - 2 colheres de sopa de molho de soja (shoyu)
 - 1 colher de sopa de óleo de gergelim
 - 1 colher de sopa de saquê (opcional)
 - 1 colher de sopa de amido de milho

 Massa:
 - 20 discos de massa para gyoza (disponível em lojas de produtos orientais)
 - Óleo para fritar
 - 1/2 xícara de água para cozinhar

 Modo de Preparo:
 - Misture a carne de porco moída, repolho, cebolinha, alho, gengibre, molho de soja, óleo de gergelim, saquê e amido de milho em uma tigela.

 Montagem:
 - Coloque uma pequena porção do recheio no centro de cada disco de massa.
 - Dobre a massa ao meio e aperte as bordas para selar, formando pregas nas laterais.

 Cozimento:
 - Aqueça uma frigideira com um pouco de óleo em fogo médio-alto.
 - Coloque os gyozas na frigideira e frite até a parte inferior ficar dourada.
 - Adicione a água na frigideira e tampe, cozinhando por 5 minutos até que a água evapore e os gyozas fiquem crocantes por baixo.

 Montagem:
 - Sirva os gyozas imediatamente com molho de soja, vinagre ou molho para gyoza.

 Tempo Total:
 - 40 minutos

 Dificuldade:
 - 3/5 (intermediário, requer habilidade para dobrar e selar a massa corretamente).`
    }, {
      titulo: "Karaage",
      descricao: "É o 'Bleach', não tem jeito.",
      favorito: false,
      imagem: "https://i.pinimg.com/736x/0c/65/6a/0c656a419027309ff4e8dd36176571d3.jpg"
      , receita: `
      Receita de Karaage
 Ingredientes:
 - 500g de peito ou coxas de frango (sem pele e cortado em pedaços pequenos)
 - 2 colheres de sopa de molho de soja (shoyu)
 - 1 colher de sopa de saquê
 - 1 colher de sopa de gengibre ralado
 - 2 dentes de alho picados
 - 1 colher de chá de açúcar
 - 1/2 colher de chá de pimenta-do-reino
 - 1/2 xícara de amido de milho (ou farinha de trigo)
 - Óleo para fritar

 Modo de Preparo:
 - Em uma tigela, misture o molho de soja, saquê, gengibre, alho, açúcar e pimenta-do-reino.
 - Adicione o frango cortado à marinada e deixe descansar na geladeira por 30 minutos a 1 hora.
 - Após marinar, retire o frango e passe os pedaços no amido de milho, cobrindo bem cada pedaço.
 - Aqueça o óleo em uma frigideira funda ou panela a 170°C.
 - Frite os pedaços de frango em pequenas porções até ficarem dourados e crocantes, cerca de 4-5 minutos.
 - Retire o frango e coloque em um prato forrado com papel toalha para remover o excesso de óleo.

 Montagem:
 - Sirva o karaage imediatamente, acompanhado de arroz branco ou como petisco.

 Tempo Total:
 - 1 hora (incluindo tempo de marinada)

 Dificuldade:
 - 3/5 (intermediário, exige atenção ao fritar para não queimar e garantir crocância).`
    }, {
      titulo: "Taiyaki",
      descricao: "Desperte aqui sua individualidade!",
      favorito: false,
      imagem: "https://i.pinimg.com/originals/9a/3d/d5/9a3dd5bfaa8cbeae4b72da90002ab5ea.jpg"
      , receita: `
      Receita de Taiyaki
 Ingredientes:
 - 2 xícaras de farinha de trigo
 - 2 colheres de sopa de açúcar
 - 1 colher de chá de fermento em pó
 - 1 ovo
 - 1 xícara de leite
 - 2 colheres de sopa de manteiga derretida
 - 1 colher de chá de essência de baunilha

 Recheio:
 - 200g de pasta de feijão azuki doce (an, encontrada em lojas de produtos orientais)
 - Ou creme de chocolate, pasta de doce de leite ou outro recheio de sua preferência (opcional)

 Modo de Preparo:
 - Em uma tigela, misture a farinha, açúcar e fermento.
 - Em outra tigela, bata o ovo e adicione o leite, manteiga derretida e essência de baunilha.
 - Misture os ingredientes secos com os líquidos até formar uma massa homogênea.

 Montagem:
 - Aqueça uma forma de taiyaki (ou forma de peixe) e unte levemente com óleo ou manteiga.
 - Coloque uma pequena porção de massa em cada cavidade da forma e, em seguida, adicione uma colher do recheio desejado.
 - Cubra o recheio com mais massa, selando as bordas.
 - Feche a forma e cozinhe em fogo baixo a médio por 3-5 minutos de cada lado, até que o taiyaki esteja dourado e crocante.

 Finalização:
 - Retire da forma e deixe esfriar levemente antes de servir.

 Tempo Total:
 - 40 minutos

 Dificuldade:
 - 3/5 (intermediário, requer cuidado para não deixar a massa queimar e garantir o recheio correto).`
    }
  ]

  atualizarFavorito(index: number, estado: boolean) {
    this.receitas[index].favorito = estado;
  }
}
