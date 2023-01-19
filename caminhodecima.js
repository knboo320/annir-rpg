//Continue na linha 101.

var prompt = require('prompt-sync')();

prompt('Seja bem-vindo ao jogo RPG! Aperte qualquer tecla para prosseguir.');
var nome = '';
console.log('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░')
console.log('░░░░░░░░░░░░░░░░▒▓▓▓▓▒░░░░░░░░░░░░░░░░░░')
console.log('░▓▓▓▓▓▓▓▓▓▓▒░░░▓▓▓░░▓█▒░▓▓▓▓▓▓▓▓▓▓▒░░░░░')
console.log('░░░▓██▓▓▓▓███▓░▒▒▒▓▒▓▓░░░▒▓▓▓▓▓▓▓███▒░░░')
console.log('░░░▓██▓░░░░▓█▓▒▓▓▓▓█▓▒░░░▒▒▓▓▒░░░▒███▒░░')
console.log('░░░▓██▓░░░░▒▓▒▒▒▒▒▒▒▒▓▒░▓▒▓▓▓░░░░░███▓░░')
console.log('░░░▓██▓░░░░▓▓▒▓█▓░░▒░▓▓▓▒▒▓▓▓░░░░▒███▒░░')
console.log('░░░▓███▓▓▓██▓▒██▓░░░░▒▓▓▓▓▓▒▒▓▒▓███▓▒░░░')
console.log('░░▒▓▓▓▓▓▓▓▒▒░░▓██▓▓▓█▓▒░▓██▓█▓▒▓▓▒░░░▒▒░')
console.log('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░')

function fun1() {
  nome = prompt(`Você é um paladino da igreja do reino de Annir. Mas, qual é o seu nome? `);

  if (nome == 'Yoru' || nome == 'Lyone' || nome == 'Rikydh' || nome == 'Annir') {
    console.log('Esse nome não está disponível.');
    fun1();
} else {
    const esc1 = prompt('Deseja definir seu nome como ' + nome + '? [S/N] ');
    if(esc1 == 'S' || esc1 == 's') {
      console.log('Seu nome foi definido como', nome);
      funMisPadre();
    } else {
      fun1();
    }
    
  }
}

fun1()

function funMisPadre() {
  console.clear()
  console.log(     nome, 'serve para um padre da grande igreja de Annir, cujo poder supera o poder da própria realeza.')
  console.log('    O padre lhe pediu para realizar uma missão, onde ele diz que "eu preciso que você encontre dois elfos para mim, cujo um deles é um elfo negro. O último lugar que eles foram vistos foi na floresta de Warwick, e não me importo se você os traga vivos ou mortos."')
  var MisPadre = prompt('Você deseja aceitar a missão? [S/N] ')
  if (MisPadre == 'S' || MisPadre == 's') {
  funSaiIgreja();
  }
  else if (MisPadre == 'N' || MisPadre == 'n') {
    funRemCargo()
  }
}

funMisPadre()

function funRemCargo() {
   console.clear()
   console.log('Padre:    Como você, raça imunda, ousa ir contra a ordem do padre de Annir? Está ficando louco?')
   console.log( )
   console.log(nome+`:    Me desculpe senhoria, mas eu não consigo aceitar esta missão. Ela me parece muito suspeita, como se fosse uma armadilha... Por que você me pediria para ir na floresta, sozinho, caçar dois elfos que você não tem praticamente nenhuma informação? 
   Eu sei que você nunca me pediria para realizar uma missão sozinho.`)
   console.log( )
   console.log('Padre:    NUNCA OUSE DUVIDAR DA IGREJA. Por favor, saia da minha sala imediatamente e nunca mais trabalhe para mim, se não terei que lhe punir.')
   console.log( )
   console.log(nome+'    O que? Como assim? Não, eu não vou sair. Eu me recuso a perder o meu cargo por causa de uma missão recusada!')
   console.log('    O padre ficou com muita raiva de ' + nome+', como se '+nome, 'tivesse feito algo para ele no passado, e decidiu leva-lo á força para a masmorra, onde ele irá jogá-lo.')
   console.log(    nome+' se sente traído, e quer fazer muito alguma coisa para resolver isso, mas é praticamente impossível.')
   var RemCargo = prompt(`O que você deseja fazer?
   [x] Somente aceitar
   [y] Brigar pelo cargo`)
   if (RemCargo == 'X' || RemCargo == 'x') {
       funPlayerEmbora()
   } else if (RemCargo == "Y" || RemCargo == "y") {
       funMasmorra()
   }
}

funRemCargo()

function funMasmorra() {
console.clear()
console.log('    O padre te segura pelos braços e tenta te levar para a masmorra e jogá-lo a força, mas ' +nome,  'consegue se soltar dos braços dele.')
var Masmorra = prompt(`O que você deseja fazer?
[x] Fugir do castelo
[y] Atacar o padre`)
if (Masmorra == 'X' || Masmorra == 'x') {
    funPlayerAlone()
} else if (Masmorra == 'Y' || Masmorra == 'y') {
    funMorteVSPadre()
}
}

function funPlayerAlone() {
console.clear()
console.log(    nome+' consegue fugir, e decide nunca mais servir à igreja de Annir, seguindo sua própria vida sozinho com o dinheiro que recebeu durante o seu cargo.')
console.log('FINAL NEUTRO 1')
fun1() 
}

function funMorteVSPadre() {
console.clear()
console.log('    O padre solta uma magia divina muito intensa, cujo ' +nome, 'nunca viu sobre, e ' +nome,'acaba não aguentando o poder, e falece.')
console.log('FINAL RUIM 1')
fun1()
}

funRemCargo()

function funPlayerEmbora() {
  console.clear()
  console.log(    nome+' consegue se soltar do braço do padre, pega seus pertences correndo e vai embora da igreja de Annir, mas não sabe o que pode fazer para ajeitar o seu destino.')
  var PlayerEmbora = prompt(`Como você deseja se ajudar?
  [x] Buscar ajuda numa taverna próxima
  [y] Ir viver sozinho`)
  if (PlayerEmbora == 'X' || PlayerEmbora == 'x') {
    funMulPoder()
  } else if (PlayerEmbora == 'Y' || PlayerEmbora == 'y') {
  funPlayerAlone()
}
}

funPlayerEmbora()

function funMulPoder(){
  console.clear()
console.log(nome+':    Pessoal, eu peço que me escutem, por favor. Vocês estão sendo manipulados pela igreja, e isso não é uma brincadeira:')
console.log( )
console.log('Cliente 1:   Hahahahahaha... Você estã ficando maluco? Como a igreja é tão grande e poderosa, se ela está "nos manipulando"? Isso não faz sentido.')
console.log( )
console.log(nome+`:    Eu tenho provas. Eu sou um paladino de Annir, e acabei de vir aqui nesta taverna pois fui expulso da Ordem dos Paladinos, por ter recusado uma missão muito suspeita do Padre, parecia que ele queria me jogar numa armadilha e me matar.
Quando eu recusei essa missão, ele me insultou de maneira racista e tentou me jogar da masmorra da igreja, e eu vim aqui pois consegui fugir do padre.`)
console.log(nome+`:    A muito tempo eu percebo coisas estranhas vindo desse padre... Ele sempre xingava as pessoas da igreja que não eram da raça humana...
Meu pai desapareceu durante uma missão do padre, e ele nunca me disse nada sobre, e me olhava com desprezo após o acontecimento, parecia até que isso tudo foi armado... Sinto saudades de Gudleif.`)
console.log( )
console.log(`Cliente 2:    Eu tenho uma história para contar também. Eu venho de uma família de halflings, e em um certo dia, meu pai tinha feito uma oração na igreja, mas ele estava demorando de mais, então eu tinha ido investigar um pouco.
Quando eu tinha chegado, eu o encontrei muito machucado, com marcas de espancamentos e vários sangramentos, e quando eu olhei para as portas dos fundos da igreja, eu consegui ver o padre correndo para fora da sala. Ele estava com as mãos ensaguentadas, e se eu não me engano, eu consegui ouvi-lo dizer: "Pequeninos nojentos... Nem deviam existir na sociedade.".
Eu tenho uma certeza praticamente absoluta de que o padre estava espancando meu pai, por conta dele ser um halfling como eu.`)
console.log( )
console.log('Cliente 3: Falando sobre, eu tinha um amigo elfo que tinha desaparecido de Annir, e eu lembro que depois dele ter entrado na igreja durante a noite, eu nunca mais o vi na vida... Foi o último lugar que ele foi visto.')
console.log( )
console.log('Cliente 4:    Eu sempre achei muito estranho o quanto que outras raças são discriminadas nesse reino. Quanto mais a igreja crescia, mais racismo existia em Annir. Sempre suspeitei dessa irmandande de idiotas.')
console.log( )
console.log('Cliente 1:    Meu, Deus... Eu já estava achando que esse cara estava enlouquecendo, mas a coisa é verídica mesmo...')
console.log( )
console.log(nome+':    Eu realmente queria livrar as pessoas dessa "ilusão racial" proporcionada pela igreja, mas eu acho que nós não temos escolha a não ser conviver com isso...')
console.log( )
console.log('Cliente 5:    Você parece um cara bem forte e inteligente, acho que todos nós poderiamos formar uma multidão e tentar derrubar a igreja. Se nós começarmos a espalhar nossa mensagem pela cidade, eu tenho quase certeza de que muitas pessoas concordarão em se juntarem à nós, visto o tanto de casos de racismo que todos compartilham envolvendo a igreja.')
console.log( )
console.log(nome+':    Vocês fariam isso por mim? Essa ideia é muito boa!')
console.log(    nome+' contou sua situação para os clientes que estavam na taverna, e muitos deles ficaram comovidos pela história de '+nome+' e começaram a compartilhar suas injustiças quanto a igreja de Annir.')
console.log('    Após um grande momento de discussões, os clientes, comovidos, decidiram criar uma multidão para ajudar '+nome+' à tomar o poder do reino.')
console.log('    Durante alguns meses, vários moradores da cidade se juntaram à multidão e entraram em batalha contra a igreja de Annir, onde no fim, conseguiram tomar o poder tanto da igreja, quanto do reino. Fazendo de '+nome+' o novo rei de Annir.')
  var MulPoder = prompt(`A partir deste ponto, como você deseja utilizar de seu poder?
  [x] Para a tirania
  [y] Para a prosperidade`)
  if (MulPoder == 'X' || MulPoder == 'x') {
    funTirania()
  } else if (MulPoder == 'Y' || MulPoder == 'y') {
    funPlayerReinoProsp()
}
}

funMulPoder()

function funPlayerReinoProsp() {
console.clear()
console.log('3 anos depois...')
console.log( )
console.log( )
console.log('Guarda Real:    Senhor '+nome+', nós recebemos um documento de um reino que não quis se declarar. Aparentemente eles querem nos ajudar!')
console.log('    Um reino desconhecido ouviu que '+nome+', o novo rei de Annir, queria criar um reino próspero e pacífico. Sabendo disso, o reino desconhecido quer lhe dar uma grande quantia de ouro como uma forma de ajudar a sua "Nova Annir".')
var PlayerReinoProsp = prompt(`O que você irá fazer?
[x] Aceitar
[y] Recusar`)
if  (PlayerReinoProsp == 'X' || PlayerReinoProsp == 'x') {
   funReinoColapso()
} else if  (PlayerReinoProsp == 'Y' || PlayerReinoProsp == 'y') {
   funPazReino()
}
}

function funReinoColapso() {
  console.clear()
  console.log(nome+':    MEU DEUS! Essa quantia vai nos ajudar muito! Eu não acho que eles fariam mal para a gente, irei aceitar a ajuda.')
  console.log( )
  console.log('Algumas semanas depois...')
  console.log( )
  console.log( )
  console.log(nome+':    Guarda Jefferson, o que é esse barulho alto de passos vindo do portão? Poderia ver para mim?')
  console.log( )
  console.log('Guarda Real:    Senhor... EVACUE O LOCAL IMEDIATAMENTE! É UMA ARMADI-')
  console.log('    O seu guarda acaba de ser acertado por uma flecha na cabeça.')
  console.log('    Aceitando o pedido, '+nome+' acaba de cair em uma armadilha, abrindo os portões de Annir e permitindo a entrada do exército do reino desconhecido, cujo os mesmos roubaram e destruíram as propriedas da atualmente devastada "Nova Annir".')
  console.log('FINAL RUIM 2')
  fun1() 
  }

function funPazReino() {
  console.clear()
  console.log(nome+':    Essa quantia é, estranhamente grande... Ainda mais vindo de um reino que não quis declarar o seu nome, eu vou é recusar isso.')
  console.log( )
  console.log('    Recusando o pedido, '+nome+' acaba não caindo na armadilha do reino desconhecido, cujo o mesmo queria saquear a "Nova Annir".') 
  console.log('    Após anos terem se passado, '+nome+' consegue instaurar a paz no seu novo reino e se sente realizado e feliz com a sua conquista.')
  console.log( )
  console.log(nome+':    Senhoras e senhores, moradores de Nova Annir! Eu declaro oficialmente, que nosso reino entrou no estado de tranquilidade absoluta! Enquanto não tivermos nenhum ataque, posso dizer para vocês, queridos moradores, que o nosso reino prosperará por muito tempo!')
  console.log('FINAL BOM 1')
  fun1() 
  }

funMulPoder()

function funTirania() {
console.clear()
console.log( )
console.log(nome+':   Senhoras e senhores, moradores da nossa Nova Annir, agora que vencemos, nós devemos demonstrar a nossa superiorade para toda a região. Nós devemos conquistar mais e mais reinos, crescendo cada vez mais! Quem está comigo?')
console.log( )
console.log('População:    *gritos de saudação ao rei*')
console.log('    A ganância e a soberba sobem na mente de '+nome+', fazendo com que '+nome+' queira obter o poder dos outros para si mesmo. Para fazer isso, '+nome+' precisa conquistar outros reinos.')
var Tirania = prompt(`Qual reino você quer atacar?
[x] O reino vizinho
[y] O reino dos elfos negros, raça odiada por natureza`)
if  (Tirania == 'X' || Tirania == 'x') {
    funAtVizinho()
} else if  (Tirania == 'Y' || Tirania == 'y') {
    funLolth()
}
}

funTirania()

function funAtVizinho() {
console.clear()
console.log('    Comparado ao reino vizinho, a "Nova Annir" tem um poder muito superior, e a conquista foi fácil.')
console.log( )
console.log(nome+' Vitória! Tudo é nosso senhores, aproveitem o gosto da conquista!')
var AtVizinho = prompt(`O que deseja fazer com o reino destruído?
[x] Roubar tudo
[y] Matar todos e roubar tudo`)
if  (AtVizinho == 'X' || AtVizinho == 'x') {
    funRouboFun()
} else if  (AtVizinho == 'Y' || AtVizinho == 'y') {
    funCorrompido()
}
}

function funRouboFun() {
  console.clear()
  console.log(nome, 'obteve uma enorme quantida de ouro e novos moradores para o seu reino, fazedo com que '+nome+' se sinta realizado, possuindo uma enorme fortuna.')
  console.log( )
  console.log('Com essa vitória, senhoras e senhoras, conseguiremos dar prosperidade ao nosso reino. Qual será o próximo agora?')
  console.log('FINAL BOM 2')
  fun1() 
  }

function funCorrompido() {
  console.clear()
  console.log('    De repente, memórias começaram á voltar na cabeça de '+nome+'... Casas destrúidas, draconatos mortos, ovos destruídos... '+nome+' começa a ficar com a cabeça pesada.')
  console.log(nome+' foi corrompido pelo poder, e sem nem mesmo sequer pensar, fez o mesmo que as pessoas que devastaram o seu reino natal, um completo massacre.')
  console.log('FINAL RUIM 3')
  fun1() 
  }

  
function funLolth() {
  console.clear
  console.log(    nome+' sente que o ar está ficando mais frio ao seu redor...')
  console.log(   nome+' não pensou em suas escolhas. A "Nova Annir" foi completamente devastada pela fúria de Lolth, a deusa dos elfos negros e a Rainha das Aranhas, numa tentiva de proteger os elfos negros do ataque do reino de '+nome+'.')
  console.log('FINAL RUIM 4')
  fun1() 
  }
