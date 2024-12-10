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
      imagemReal: "https://i.ytimg.com/vi/MoNUQn8HfFU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA1wk5PqDuaJccGjZ12mcre49Xwtw",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TkfS46zqtBFrS-IwBLOclW2Uni7Pc4E8_90bIkgeqM8mbDtr",
      receita: `
      <div class="recipe-container">
    <h1>Receita de Strawberry Shortcake</h1>

    <h2>Ingredientes:</h2>
    <ul>
        <li>4 ovos (separar gemas e claras)</li>
        <li>120g de açúcar</li>
        <li>120g de farinha de trigo</li>
        <li>1 colher de chá de essência de baunilha</li>
    </ul>

    <h3>Para o chantilly:</h3>
    <ul>
        <li>400ml de creme de leite fresco (gelado)</li>
        <li>50g de açúcar de confeiteiro</li>
        <li>1 colher de chá de essência de baunilha</li>
    </ul>

    <h3>Para o recheio e decoração:</h3>
    <ul>
        <li>300g de morangos frescos</li>
        <li>Açúcar de confeiteiro</li>
    </ul>

    <h2>Modo de Preparo:</h2>
    <ol>
        <li>Bata claras em neve e adicione o açúcar aos poucos até formar merengue.</li>
        <li>Acrescente as gemas e a baunilha, batendo em velocidade baixa.</li>
        <li>Misture a farinha peneirada delicadamente e asse em forma untada (180°C por 25-30 minutos).</li>
        <li>Deixe esfriar e corte ao meio.</li>
    </ol>

    <h3>Chantilly:</h3>
    <ol>
        <li>Bata o creme de leite, açúcar e baunilha até formar picos firmes.</li>
    </ol>

    <h3>Montagem:</h3>
    <ol>
        <li>Coloque uma camada de bolo, cubra com chantilly e fatias de morango.</li>
        <li>Adicione a outra camada, cubra com chantilly e decore com morangos inteiros e açúcar de confeiteiro.</li>
    </ol>

    <h2>Tempo Total:</h2>
    <p>1h30min (Preparo: 1h / Montagem: 30min)</p>

    <h2>Dificuldade:</h2>
    <p>3/5 (intermediário)</p>
</div>
      `
    }, {
      titulo: "Lámen",
      descricao: "Um jeito ninja de ser.",
      favorito: false,
      imagemReal: "https://sabores-new.s3.amazonaws.com/public/2024/11/shio-lamen.jpg",
      imagem: "https://i.redd.it/5pugcw254ol41.jpg"
      , receita: `
      <div class="recipe-container">
    <h1>Receita de Lámen</h1>

    <h2>Ingredientes:</h2>
    <ul>
        <li>200g de macarrão para lámen (ou talharim fresco)</li>
        <li>1 ovo cozido</li>
        <li>150g de lombo de porco (fatiado)</li>
        <li>1 colher de sopa de óleo de gergelim</li>
        <li>1 colher de sopa de shoyu (molho de soja)</li>
        <li>1 colher de chá de missô (pasta de soja)</li>
        <li>750ml de caldo (frango ou porco)</li>
        <li>Cebolinha picada a gosto</li>
        <li>1 folha de nori (alga seca)</li>
        <li>1 fatia de naruto (massa de peixe em espiral rosa)</li>
    </ul>

    <h2>Modo de Preparo:</h2>
    <ol>
        <li><strong>Caldo:</strong> Aqueça o caldo em fogo médio, misture o missô, shoyu e óleo de gergelim. Mexa bem e mantenha aquecido.</li>
        <li><strong>Macarrão:</strong> Cozinhe o macarrão em água fervente até ficar al dente. Escorra e reserve.</li>
        <li><strong>Porco:</strong> Grelhe o lombo até dourar levemente.</li>
    </ol>

    <h3>Montagem:</h3>
    <ol>
        <li>Coloque o macarrão em uma tigela grande.</li>
        <li>Despeje o caldo quente por cima.</li>
        <li>Adicione o lombo, ovo cortado ao meio, fatia de naruto, nori e cebolinha.</li>
    </ol>

    <h2>Tempo Total:</h2>
    <p>40 minutos</p>

    <h2>Dificuldade:</h2>
    <p>2/5 (fácil, exige apenas montagem cuidadosa)</p>
</div>
      `
    }, {
      titulo: "Bentô",
      descricao: "Para os intervalos escolares.",
      favorito: false,
      imagemReal: "https://img.freepik.com/fotos-premium/marmita-bento-japones_511235-10203.jpg",
      imagem: "https://cdn.myanimelist.net/s/common/uploaded_files/1450215038-51def10635914a9d9d5cf9477f28b142.png"
      , receita: `
      <h1>Receita de Bentô Tradicional</h1>

    <h2>Ingredientes:</h2>
    <ul>
        <li>1 xícara de arroz japonês cozido (gohan)</li>
        <li>1 colher de chá de gergelim torrado</li>
        <li><strong>Proteína:</strong></li>
        <ul>
            <li>150g de frango ou salmão grelhado (temperado com shoyu e gengibre)</li>
        </ul>
        <li><strong>Acompanhamentos:</strong></li>
        <ul>
            <li>2 ovos (para tamagoyaki - omelete japonês)</li>
            <li>50g de brócolis cozido no vapor</li>
            <li>3 tomates-cereja</li>
            <li>1 fatia de nori (opcional)</li>
        </ul>
    </ul>

    <h2>Modo de Preparo:</h2>
    <ol>
        <li><strong>Base:</strong> Cozinhe o arroz japonês e tempere com gergelim torrado. Reserve.</li>
        <li><strong>Proteína:</strong> Tempere e grelhe o frango ou salmão até dourar.</li>
    </ol>

    <h3>Acompanhamentos:</h3>
    <ol>
        <li>Prepare o tamagoyaki: Bata os ovos, adicione uma pitada de açúcar e shoyu, e cozinhe em camadas finas numa frigideira, enrolando para formar um rolo. Corte em pedaços.</li>
        <li>Cozinhe o brócolis no vapor até ficar macio.</li>
    </ol>

    <h3>Montagem:</h3>
    <ol>
        <li>Coloque o arroz em um lado da marmita.</li>
        <li>Disponha a proteína e os acompanhamentos ao lado, separando com divisórias (ou folhas de alface, se preferir).</li>
        <li>Decore com nori ou outros enfeites comestíveis.</li>
    </ol>

    <h2>Tempo Total:</h2>
    <p>40 minutos</p>

    <h2>Dificuldade:</h2>
    <p>3/5 (nível intermediário, requer habilidade para o tamagoyaki e apresentação cuidadosa)</p>
</div>
      `
    }, {
      titulo: "Curry Japonês",
      descricao: "Vale 100 milhões de berries.",
      favorito: false,
      imagemReal: "https://br.giallozafferano.com/images/5-525/Frango-ao-curry_1200x800.jpg",
      imagem: "https://i.pinimg.com/736x/4f/ad/32/4fad3231040b46d7e5e413b06bfdc2da.jpg"
      , receita: `
      <h2>Receita de Curry Japonês</h2>
            <p><strong>Ingredientes:</strong></p>
            <ul>
                <li>400g de carne (fraldinha ou coxão mole)</li>
                <li>250g de cebola picada</li>
                <li>150g de cenoura em cubos</li>
                <li>300g de batatas em cubos</li>
                <li>2 colheres de sopa de óleo</li>
                <li>1 tablete de Golden Curry</li>
                <li>800ml de água</li>
                <li>Arroz japonês (gohan) ou arroz branco comum</li>
            </ul>

            <p><strong>Modo de Preparo:</strong></p>
            <ol>
                <li>Em uma frigideira funda, aqueça o óleo e doure a carne.</li>
                <li>Acrescente a cebola e refogue até dourar. Reserve.</li>
                <li>Cozinhe as batatas e cenouras na água até ficarem macias.</li>
                <li>Adicione a carne com cebola à panela dos legumes e misture.</li>
                <li>Acrescente o Golden Curry e mexa até dissolver e o caldo engrossar.</li>
            </ol>

            <p><strong>Montagem:</strong> Sirva o curry sobre o arroz quente ou ao lado.</p>
            <p><strong>Tempo Total:</strong> 1 hora</p>
            <p><strong>Dificuldade:</strong> 2/5 (fácil, com preparo simples)</p>
        </section>
    </div>
</body>
      `
    }, {
      titulo: "Takoyaki",
      descricao: "Exclusivo para Nami-san.",
      favorito: false,
      imagemReal: "https://s.hungryghostfoodandtravel.com/media/20240912224148/takoyaki-recipe_done.png",
      imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2p8imoIyD1BkWKh1_B3f9tJU2xqTzvJmpVCTu1j90YFQ75oOB7LVcTfjR-oKTE42BTe22ydSePA-PFX9mKF2vu_hLK5O8XRtHZLBrfMapMrmABNqGiyChr_dqupTWt3TCRi7Mbfv5L55y/s1600/takoyaki-ookami-shoujo-to-kuro-ouji-08-01.png"
      , receita: `
      <h2>Receita de Takoyaki</h2>
            <p><strong>Ingredientes:</strong></p>
            <ul>
                <li>250g de farinha para takoyaki</li>
                <li>2 ovos</li>
                <li>600ml de caldo dashi (caldo de peixe)</li>
                <li>200g de polvo cozido em pedaços pequenos</li>
                <li>100g de cebolinha picada</li>
                <li>100g de gengibre em conserva picado</li>
                <li>Óleo para untar a chapa</li>
                <li>Molho para takoyaki (ou molho inglês com um toque de açúcar)</li>
                <li>Maionese japonesa (opcional)</li>
                <li>Flocos de bonito (katsuobushi)</li>
                <li>Alga nori picada</li>
            </ul>

            <p><strong>Modo de Preparo:</strong></p>
            <ol>
                <li>Em uma tigela, misture a farinha, ovos e o caldo dashi até formar uma massa líquida homogênea.</li>
                <li>Aqueça a chapa para takoyaki e unte com óleo.</li>
                <li>Preencha as cavidades da chapa com a massa, deixando espaço no centro para os recheios.</li>
                <li>Adicione pedaços de polvo, cebolinha e gengibre em cada cavidade.</li>
                <li>Com a ajuda de palitos ou espetos, vire os takoyakis enquanto cozinham para formar bolinhos redondos.</li>
            </ol>

            <p><strong>Montagem:</strong> Retire os takoyakis da chapa e coloque-os em um prato. Cubra com molho para takoyaki, maionese japonesa, flocos de bonito e alga nori.</p>
            <p><strong>Tempo Total:</strong> 30 minutos</p>
            <p><strong>Dificuldade:</strong> 3/5 (intermediário, exige atenção para virar os takoyakis na chapa).</p>
        </section>
    </div>
</body>`
    }, {
      titulo: "Dango",
      descricao: "Sobreviva no Exame 'Chuunin'.",
      favorito: false,
      imagemReal: "https://miro.medium.com/v2/resize:fit:1200/1*jE3LYRe3niL1RxLlY_VUgA.png",
      imagem: "https://64.media.tumblr.com/654c137ba23af1e826382ee7531fbc13/tumblr_n7593gCm4X1t2rr2bo1_1280.pnj"
      , receita: `
      <section class="my-4">
    <h2>Receita de Dango</h2>
    <p><strong>Ingredientes:</strong></p>
    <ul>
        <li>100g de farinha de arroz glutinoso</li>
        <li>100g de farinha de arroz comum</li>
        <li>100ml de água morna</li>
    </ul>

    <p><strong>Para o molho mitarashi:</strong></p>
    <ul>
        <li>3 colheres de sopa de açúcar</li>
        <li>2 colheres de sopa de shoyu (molho de soja)</li>
        <li>2 colheres de sopa de mirin (saquê culinário)</li>
        <li>1 colher de chá de amido de milho diluído em 50ml de água</li>
    </ul>

    <p><strong>Modo de Preparo:</strong></p>
    <ol>
        <li>Misture as farinhas e adicione água morna aos poucos, até formar uma massa lisa.</li>
        <li>Divida em pequenas porções e molde bolinhas uniformes.</li>
        <li>Cozinhe as bolinhas em água fervente até que flutuem, depois mergulhe em água gelada e escorra.</li>
    </ol>

    <p><strong>Para o molho:</strong></p>
    <ol>
        <li>Em uma panela, misture açúcar, shoyu, mirin e o amido de milho diluído.</li>
        <li>Cozinhe em fogo médio, mexendo, até engrossar.</li>
    </ol>

    <p><strong>Montagem:</strong> Espete 3 a 4 bolinhas em palitos. Pincele o molho sobre os dangos e, se desejar, grelhe rapidamente para caramelizar.</p>
    <p><strong>Tempo Total:</strong> 30 minutos</p>
    <p><strong>Dificuldade:</strong> 2/5 (fácil, requer atenção na textura da massa e do molho).</p>
</section>
`
    }, {
      titulo: "Onigiri",
      descricao: "Bom para viagens, tipo 'Chihiro'.",
      favorito: false,
      imagemReal: "https://www.justonecookbook.com/wp-content/uploads/2023/09/Onigiri-Japanese-Rice-Balls-2063-I-1.jpg",
      imagem: "https://i.pinimg.com/originals/41/28/58/412858a0e5152d67ac42e5add90c8e40.jpg"
      , receita: `
      <section class="my-4">
    <h2>Receita de Onigiri</h2>
    <p><strong>Ingredientes:</strong></p>
    <ul>
        <li>2 xícaras de arroz japonês (gohan) cozido</li>
        <li>1 colher de chá de sal</li>
        <li>1 folha de nori (alga seca), cortada em tiras</li>
    </ul>

    <p><strong>Recheio (opcional):</strong></p>
    <ul>
        <li>50g de atum (ou salmão) em conserva com maionese</li>
        <li>1 colher de chá de umeboshi (ameixa em conserva)</li>
    </ul>

    <p><strong>Modo de Preparo:</strong></p>
    <ol>
        <li>Cozinhe o arroz japonês e deixe esfriar um pouco.</li>
        <li>Lave as mãos e unte com um pouco de sal para evitar que o arroz grude.</li>
        <li>Modele pequenas porções de arroz em formato triangular ou redondo.</li>
        <li>Se for usar recheio, abra um pequeno espaço no centro do arroz e coloque o recheio escolhido (atum, umeboshi, etc.).</li>
        <li>Feche o arroz ao redor do recheio e molde novamente.</li>
    </ol>

    <p><strong>Montagem:</strong> Envolva cada onigiri com uma tira de nori ou deixe sem, dependendo da preferência.</p>
    <p><strong>Tempo Total:</strong> 30 minutos</p>
    <p><strong>Dificuldade:</strong> 2/5 (fácil, mas exige atenção ao molde e ao recheio).</p>
</section>

      `
    }, {
      titulo: "Nikuman",
      descricao: "Apenas com licença 'Hunter'.",
      favorito: false,
      imagemReal: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000455/img/basic/a0000455_main.jpg",
      imagem: "https://i.pinimg.com/originals/c0/09/5b/c0095b5252f1776a017c101802051fba.png"
      , receita: `
      <section class="my-4">
    <h2>Receita de Nikuman</h2>
    <p><strong>Ingredientes:</strong></p>
    <ul>
        <li>2 xícaras de farinha de trigo</li>
        <li>1/2 xícara de água morna</li>
        <li>1 colher de sopa de açúcar</li>
        <li>1 colher de sopa de óleo vegetal</li>
        <li>1/2 colher de chá de sal</li>
        <li>1 colher de chá de fermento biológico seco</li>
    </ul>

    <p><strong>Recheio:</strong></p>
    <ul>
        <li>300g de carne de porco moída</li>
        <li>1/4 de cebola picada</li>
        <li>1 colher de sopa de molho de soja (shoyu)</li>
        <li>1 colher de chá de óleo de gergelim</li>
        <li>1 colher de chá de gengibre ralado</li>
        <li>1 colher de sopa de açúcar</li>
        <li>1/2 colher de chá de pimenta branca (opcional)</li>
    </ul>

    <p><strong>Modo de Preparo:</strong></p>
    <ol>
        <li>Dissolva o fermento e o açúcar na água morna e deixe descansar por 10 minutos até espumar.</li>
        <li>Adicione a farinha, o óleo e o sal, misturando até formar uma massa. Sove até ficar macia e elástica. Deixe crescer por 1 hora ou até dobrar de tamanho.</li>
    </ol>

    <p><strong>Recheio:</strong></p>
    <ol>
        <li>Em uma frigideira, refogue a cebola até dourar.</li>
        <li>Adicione a carne moída, molho de soja, óleo de gergelim, gengibre e açúcar, cozinhando até a carne estar completamente cozida e bem temperada. Deixe esfriar.</li>
    </ol>

    <p><strong>Montagem:</strong> Modele bolinhas pequenas com a massa, recheie com a mistura de carne e feche formando pequenos pãezinhos. Coloque os pães em uma cesta ou papel manteiga e deixe crescer por 20 minutos.</p>

    <p><strong>Cozimento:</strong> Cozinhe os nikuman em uma panela a vapor por 15-20 minutos até ficarem macios e cozidos por dentro.</p>
    <p><strong>Tempo Total:</strong> 2 horas (incluindo tempo de fermentação)</p>
    <p><strong>Dificuldade:</strong> 3/5 (intermediário, exige cuidado na preparação da massa e do recheio).</p>
</section>
`
    }, {
      titulo: "Sopa de Missô",
      descricao: "Um poder de mais de 8 mil!!",
      favorito: false,
      imagemReal: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/6dd1b82d4c7f237898c81e1717208206.jpg",
      imagem: "https://contents.oricon.co.jp/photo/img/5000/5449/detail/img660/1582627272741.jpg"
      , receita: `
      <section class="my-4">
    <h2>Receita de Sopa de Missô</h2>
    <p><strong>Ingredientes:</strong></p>
    <ul>
        <li>4 xícaras de caldo dashi (pode usar instantâneo)</li>
        <li>3 colheres de sopa de pasta de miso (shiro miso ou aka miso)</li>
        <li>100g de tofu cortado em cubos</li>
        <li>2 colheres de sopa de cebolinha picada</li>
        <li>1 colher de chá de alga wakame desidratada (opcional)</li>
    </ul>

    <p><strong>Modo de Preparo:</strong></p>
    <ol>
        <li>Aqueça o caldo dashi em uma panela até ferver.</li>
        <li>Dissolva a pasta de miso no caldo, mexendo bem até que se dissolva completamente.</li>
        <li>Adicione os cubos de tofu e a alga wakame (se for usar). Cozinhe por mais 2-3 minutos, até que o tofu fique bem aquecido.</li>
        <li>Desligue o fogo e adicione a cebolinha picada.</li>
    </ol>

    <p><strong>Montagem:</strong> Sirva a sopa imediatamente, quente.</p>
    <p><strong>Tempo Total:</strong> 15 minutos</p>
    <p><strong>Dificuldade:</strong> 1/5 (muito fácil, rápido e simples).</p>
</section>
`
    }, {
      titulo: "Gyoza",
      descricao: "Pasteizinhos do período 'Edo'.",
      favorito: false,
      imagemReal: "https://www.comidaereceitas.com.br/wp-content/uploads/2010/04/Gyoza-pastel-japones-freepik.jpg",
      imagem: "https://itadakimasuanime.wordpress.com/wp-content/uploads/2014/04/gyoza-natsuyuki-rendezvou-02-01.png"
      , receita: `
      <section class="my-4">
    <h2>Receita de Gyoza</h2>
    <p><strong>Ingredientes:</strong></p>
    <ul>
        <li>300g de carne de porco moída</li>
        <li>1/2 xícara de repolho finamente picado</li>
        <li>2 colheres de sopa de cebolinha picada</li>
        <li>1 dente de alho picado</li>
        <li>1 colher de sopa de gengibre ralado</li>
        <li>2 colheres de sopa de molho de soja (shoyu)</li>
        <li>1 colher de sopa de óleo de gergelim</li>
        <li>1 colher de sopa de saquê (opcional)</li>
        <li>1 colher de sopa de amido de milho</li>
    </ul>

    <p><strong>Massa:</strong></p>
    <ul>
        <li>20 discos de massa para gyoza (disponível em lojas de produtos orientais)</li>
        <li>Óleo para fritar</li>
        <li>1/2 xícara de água para cozinhar</li>
    </ul>

    <p><strong>Modo de Preparo:</strong></p>
    <ol>
        <li>Misture a carne de porco moída, repolho, cebolinha, alho, gengibre, molho de soja, óleo de gergelim, saquê e amido de milho em uma tigela.</li>
    </ol>

    <p><strong>Montagem:</strong> Coloque uma pequena porção do recheio no centro de cada disco de massa. Dobre a massa ao meio e aperte as bordas para selar, formando pregas nas laterais.</p>

    <p><strong>Cozimento:</strong></p>
    <ol>
        <li>Aqueça uma frigideira com um pouco de óleo em fogo médio-alto.</li>
        <li>Coloque os gyozas na frigideira e frite até a parte inferior ficar dourada.</li>
        <li>Adicione a água na frigideira e tampe, cozinhando por 5 minutos até que a água evapore e os gyozas fiquem crocantes por baixo.</li>
    </ol>

    <p><strong>Montagem:</strong> Sirva os gyozas imediatamente com molho de soja, vinagre ou molho para gyoza.</p>
    <p><strong>Tempo Total:</strong> 40 minutos</p>
    <p><strong>Dificuldade:</strong> 3/5 (intermediário, requer habilidade para dobrar e selar a massa corretamente).</p>
</section>

      `
    }, {
      titulo: "Karaage",
      descricao: "É o 'Bleach', não tem jeito.",
      favorito: false,
      imagemReal: "https://static01.nyt.com/images/2018/07/25/dining/HK-karaage-horizontal/merlin_141075300_74569dec-9fc2-4174-931d-019dddef3bb8-superJumbo.jpg",
      imagem: "https://i.pinimg.com/736x/0c/65/6a/0c656a419027309ff4e8dd36176571d3.jpg"
      , receita: `
      <section class="my-4">
    <h2>Receita de Karaage</h2>
    <p><strong>Ingredientes:</strong></p>
    <ul>
        <li>500g de peito ou coxas de frango (sem pele e cortado em pedaços pequenos)</li>
        <li>2 colheres de sopa de molho de soja (shoyu)</li>
        <li>1 colher de sopa de saquê</li>
        <li>1 colher de sopa de gengibre ralado</li>
        <li>2 dentes de alho picados</li>
        <li>1 colher de chá de açúcar</li>
        <li>1/2 colher de chá de pimenta-do-reino</li>
        <li>1/2 xícara de amido de milho (ou farinha de trigo)</li>
        <li>Óleo para fritar</li>
    </ul>

    <p><strong>Modo de Preparo:</strong></p>
    <ol>
        <li>Em uma tigela, misture o molho de soja, saquê, gengibre, alho, açúcar e pimenta-do-reino.</li>
        <li>Adicione o frango cortado à marinada e deixe descansar na geladeira por 30 minutos a 1 hora.</li>
        <li>Após marinar, retire o frango e passe os pedaços no amido de milho, cobrindo bem cada pedaço.</li>
        <li>Aqueça o óleo em uma frigideira funda ou panela a 170°C.</li>
        <li>Frite os pedaços de frango em pequenas porções até ficarem dourados e crocantes, cerca de 4-5 minutos.</li>
        <li>Retire o frango e coloque em um prato forrado com papel toalha para remover o excesso de óleo.</li>
    </ol>

    <p><strong>Montagem:</strong> Sirva o karaage imediatamente, acompanhado de arroz branco ou como petisco.</p>
    <p><strong>Tempo Total:</strong> 1 hora (incluindo tempo de marinada)</p>
    <p><strong>Dificuldade:</strong> 3/5 (intermediário, exige atenção ao fritar para não queimar e garantir crocância).</p>
</section>

      `
    }, {
      titulo: "Taiyaki",
      descricao: "Desperte aqui sua individualidade!",
      favorito: false,
      imagemReal: "https://www.orientalmarket.pt/blog/wp-content/uploads/2021/03/kelly-visel-MIMgqOQLnOc-unsplash.jpg",
      imagem: "https://i.pinimg.com/originals/9a/3d/d5/9a3dd5bfaa8cbeae4b72da90002ab5ea.jpg"
      , receita: `
      <section class="my-4">
    <h2>Receita de Taiyaki</h2>
    <p><strong>Ingredientes:</strong></p>
    <ul>
        <li>2 xícaras de farinha de trigo</li>
        <li>2 colheres de sopa de açúcar</li>
        <li>1 colher de chá de fermento em pó</li>
        <li>1 ovo</li>
        <li>1 xícara de leite</li>
        <li>2 colheres de sopa de manteiga derretida</li>
        <li>1 colher de chá de essência de baunilha</li>
    </ul>

    <p><strong>Recheio:</strong></p>
    <ul>
        <li>200g de pasta de feijão azuki doce (an, encontrada em lojas de produtos orientais)</li>
        <li>Ou creme de chocolate, pasta de doce de leite ou outro recheio de sua preferência (opcional)</li>
    </ul>

    <p><strong>Modo de Preparo:</strong></p>
    <ol>
        <li>Em uma tigela, misture a farinha, açúcar e fermento.</li>
        <li>Em outra tigela, bata o ovo e adicione o leite, manteiga derretida e essência de baunilha.</li>
        <li>Misture os ingredientes secos com os líquidos até formar uma massa homogênea.</li>
    </ol>

    <p><strong>Montagem:</strong> Aqueça uma forma de taiyaki (ou forma de peixe) e unte levemente com óleo ou manteiga. Coloque uma pequena porção de massa em cada cavidade da forma e, em seguida, adicione uma colher do recheio desejado. Cubra o recheio com mais massa, selando as bordas. Feche a forma e cozinhe em fogo baixo a médio por 3-5 minutos de cada lado, até que o taiyaki esteja dourado e crocante.</p>

    <p><strong>Finalização:</strong> Retire da forma e deixe esfriar levemente antes de servir.</p>
    <p><strong>Tempo Total:</strong> 40 minutos</p>
    <p><strong>Dificuldade:</strong> 3/5 (intermediário, requer cuidado para não deixar a massa queimar e garantir o recheio correto).</p>
</section>
      `
    }
  ]

  atualizarFavorito(index: number, estado: boolean) {
    this.receitas[index].favorito = estado;
  }
}
