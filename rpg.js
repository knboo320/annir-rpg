var prompt = require('prompt-sync')();
;
prompt('Seja bem-vindo ao jogo RPG! Aperte qualquer tecla para prosseguir.');
var nome = '';
console.log('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
console.log('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
console.log('░░░░▒█▓▓▓▓█▒░▓▓▓▓▓▓█░░█▓▓▓▓▓▓░░▓▓▓█▓▓▒░▒█▓▓▓▓█▒░░░');
console.log('░░░░▓█░░░░█▒░▓▓░░░░█░░█▒░░░▒█░░░░▒█░░░░▒█░░░░█▒░░░');
console.log('░░░░▓█▓▓▓▓█▒░▓▓░░░░█░░█▒░░░▒█░░░░▒█░░░░▒█▓▓▓▓▒░░░░');
console.log('░░░░▒▓░░░░▓▒░▓▒░░░░▓░░▓▒░░░▒▓░░▓▓▓▓▓▓▒░▒▓░░░░▓▒░░░');
console.log('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
console.log('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
;
function fun1() {
  nome = prompt(`Você é um paladino da igreja do reino de Annir. Mas, qual é o seu nome? `);
;
  if (nome == 'Yoru' || nome == 'Lyone' || nome == 'Rikydh' || nome == 'Annir') {
    console.log('Esse nome não está disponível.');
    fun1();
  } else {
    const esc1 = prompt('Deseja definir seu nome como ' + nome + '? [S/N] ');
    if (esc1 == 'S' || esc1 == 's') {
      console.log('Seu nome foi definido como', nome);
      funMisPadre();
    } else {
      fun1();
    }
;
  }
}
;
fun1();
;
function funMisPadre() {
  console.clear();
  console.log(nome + ' é um draconato (homem-dragão) de olhos vermelhos. Possui 1,83 de altura e tem o poder de cuspir um ar congelante.');
  console.log('    Você serve para um padre da grande igreja de Annir, cujo poder supera o poder da própria realeza.');
  console.log();
  console.log('    O padre lhe pediu para realizar uma missão, onde ele diz que "eu preciso que você encontre dois elfos para mim, cujo um deles é um elfo negro. O último lugar que eles foram vistos foi na floresta de Warwick, e não me importo se você os traga vivos ou mortos."');
  var MisPadre = prompt('Você deseja aceitar a missão? [S/N] ');
  if (MisPadre == 'S' || MisPadre == 's') {
    funSaiIgreja1();
  }
  else if (MisPadre == 'N' || MisPadre == 'n') {
    funRemCargo();
  } else {
    funMisPadre();
  }
}
;
function funSaiIgreja1() {
  console.clear();
  console.log(nome + ' sai da igreja em rumo à sua missão, escolhendo por qual saída quer ir.');
  var sairIgreja = prompt(`;
  [x] Ir pelo dormitório.                                                                 ;
  [y] Ir pela escada da igreja.;
   `);
  if (sairIgreja == 'Y' || sairIgreja == 'y') {
    funEscada();
  }
  else if (sairIgreja == 'X' || sairIgreja == 'x') {
    funSeguirSozinho();
  } else {
    funSaiIgreja1();
  }
}
;
function funSeguirSozinho() {
  console.clear();
  console.log(nome + ' segue seu caminho sozinho, indo em direção à floresta para realizar a sua missão.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  funRykidhAtaque();
}
;
function funRemCargo() {
  console.clear();
  console.log('Padre:    Como você, raça imunda, ousa ir contra a ordem do padre de Annir? Está ficando louco?!');
  console.log();
  console.log(nome + `:    Me desculpe senhoria, mas eu não consigo aceitar esta missão. Ela me parece muito suspeita, como se fosse uma armadilha... Por que você me pediria para ir na floresta, sozinho, caçar dois elfos que você não tem praticamente nenhuma informação?;
   Eu te conheço e sei que você nunca me pediria para realizar uma missão sozinho.`);
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Padre:    NUNCA OUSE DUVIDAR DA IGREJA. Por favor, saia da minha sala imediatamente e nunca mais trabalhe para mim, se não terei que lhe punir.');
  console.log();
  console.log(nome + '    O que? Como assim? Não, eu não vou sair. Eu me recuso a perder o meu cargo por causa de uma missão recusada!');
  console.log('    O padre ficou com muita raiva de ' + nome + ', como se ' + nome, 'tivesse feito algo para ele no passado, e decidiu levá-lo à força para a masmorra, onde ele irá jogá-lo.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log(nome + ' se sente traído, e quer fazer muito alguma coisa para resolver isso, mas é praticamente impossível.');
  var remCargo = prompt(`O que você deseja fazer?;
   [x] Somente aceitar;
   [y] Brigar pelo cargo `);
  if (remCargo == 'X' || remCargo == 'x') {
    funPlayerEmbora();
  } else if (remCargo == 'Y' || remCargo == 'y') {
    funMasmorra();
  } else {
    funRemCargo();
  }
}
;
function funMasmorra() {
  console.clear();
  console.log('    O padre te segura pelos braços e tenta te levar para a masmorra e jogá-lo a força, mas ' + nome, 'consegue se soltar dos braços dele.');
  var Masmorra = prompt(`O que você deseja fazer?;
[x] Fugir do castelo;
[y] Atacar o padre `);
  if (Masmorra == 'X' || Masmorra == 'x') {
    funPlayerAlone();
  } else if (Masmorra == 'Y' || Masmorra == 'y') {
    funMorteVSPadre();
  } else {
    funMasmorra();
  }
}
;
function funPlayerAlone() {
  console.clear();
  console.log(nome + ' consegue fugir, e decide nunca mais servir à igreja de Annir, seguindo sua própria vida sozinho com o dinheiro que recebeu durante o seu cargo.');
  console.log('FINAL NEUTRO 1');
  fun1();
}
;
function funMorteVSPadre() {
  console.clear();
  console.log('    O padre solta uma magia divina muito intensa, cujo ' + nome, 'nunca viu sobre, e ' + nome, 'acaba não aguentando o poder, e falece.');
  console.log('FINAL RUIM 1');
  fun1();
}
;
function funPlayerEmbora() {
  console.clear();
  console.log(nome + ' consegue se soltar do braço do padre, pega seus pertences correndo e vai embora da igreja de Annir, mas não sabe o que pode fazer para ajeitar o seu destino.');
  var PlayerEmbora = prompt(`Como você deseja se ajudar?;
  [x] Buscar ajuda numa taverna próxima;
  [y] Ir viver sozinho `);
  if (PlayerEmbora == 'X' || PlayerEmbora == 'x') {
    funMulPoder();
  } else if (PlayerEmbora == 'Y' || PlayerEmbora == 'y') {
    funPlayerAlone();
  } else {
    funPlayerEmbora();
  }
}
;
function funMulPoder() {
  console.clear();
  console.log(nome + ':    Pessoal, eu peço que me escutem, por favor. Vocês estão sendo manipulados pela igreja, e isso não é uma brincadeira:');
  console.log();
  console.log('Cliente 1:   Hahahahahaha... Você está ficando maluco? Como a igreja é tão grande e poderosa, se ela está "nos manipulando"? Isso não faz sentido.');
  console.log();
  console.log(nome + `:    Eu tenho provas. Eu sou um paladino de Annir, e acabei de vir aqui nesta taverna pois fui expulso da Ordem dos Paladinos, por ter recusado uma missão muito suspeita do Padre, parecia que ele queria me jogar numa armadilha e me matar.;
Quando eu recusei essa missão, ele me insultou de maneira racista e tentou me jogar da masmorra da igreja, e eu vim aqui pois consegui fugir do padre.`);
  console.log(nome + `:    A muito tempo eu percebo coisas estranhas vindo desse padre... Ele sempre xingava as pessoas da igreja que não eram da raça humana...;
Meu pai desapareceu durante uma missão do padre, e ele nunca me disse nada sobre, e me olhava com desprezo após o acontecimento, parecia até que isso tudo foi armado... Sinto saudades de Gudleif.`);
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log(`Cliente 2:    Eu também tive uma experiência ruim com o padre. Eu venho de uma família de halflings, e em um certo dia, meu pai tinha feito uma oração na igreja, mas ele estava demorando demais, então eu tive que investigar um pouco.;
Quando eu tinha chegado, eu o encontrei muito machucado, com marcas de espancamentos e vários sangramentos, e quando eu olhei para as portas dos fundos da igreja, eu consegui ver o padre correndo para fora da sala. Ele estava com as mãos ensaguentadas, e se eu não me engano, eu consegui ouvi-lo dizer: "Pequeninos nojentos... Nem deviam existir na sociedade.".;
Eu tenho uma certeza praticamente absoluta de que o padre estava espancando meu pai, por conta dele ser um halfling como eu.`);
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Cliente 3: Falando sobre, eu tinha um amigo elfo que tinha desaparecido de Annir, e eu lembro que depois dele ter entrado na igreja durante a noite, eu nunca mais o vi na vida... Foi o último lugar que ele foi visto.');
  console.log();
  console.log('Cliente 4:    Eu sempre achei muito estranho o quanto que outras raças são discriminadas neste reino. Quanto mais a igreja crescia, mais racismo existia em Annir. Sempre suspeitei dessa irmandande de idiotas.');
  console.log();
  console.log('Cliente 1:    Meu, Deus... Eu já estava achando que esse cara estava enlouquecendo, mas a coisa é verídica mesmo...');
  console.log();
  console.log(nome + ':    Eu realmente queria livrar as pessoas dessa "ilusão racial" proporcionada pela igreja, mas eu acho que nós não temos escolha a não ser conviver com isso...');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Cliente 5:    Você parece um cara bem forte e inteligente, acho que todos nós poderíamos formar uma multidão e tentar derrubar a igreja. Se nós começarmos a espalhar nossa mensagem pela cidade, eu tenho quase certeza de que muitas pessoas concordaram em se juntarem à nós, visto o tanto de casos de racismo que todos compartilham envolvendo a igreja.');
  console.log();
  console.log(nome + ':    Vocês fariam isso por mim? Essa ideia é muito boa!');
  console.log(nome + ' contou sua situação para os clientes que estavam na taverna, e muitos deles ficaram comovidos pela história de ' + nome + ' e começaram a compartilhar suas injustiças quanto a igreja de Annir.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('    Após um grande momento de discussões, os clientes, comovidos, decidiram criar uma multidão para ajudar ' + nome + ' à tomar o poder do reino.');
  console.log('    Durante alguns meses, vários moradores da cidade se juntaram à multidão e entraram em batalha contra a igreja de Annir, onde no fim, conseguiram tomar o poder tanto da igreja, quanto do reino. Fazendo de ' + nome + ' o novo rei de Annir.');
  var MulPoder = prompt(`A partir deste ponto, como você deseja utilizar de seu poder?;
  [x] Para a tirania;
  [y] Para a prosperidade `);
  if (MulPoder == 'X' || MulPoder == 'x') {
    funTirania();
  } else if (MulPoder == 'Y' || MulPoder == 'y') {
    funPlayerReinoProsp();
  } else {
    funMulPoder();
  }
}
function funPlayerReinoProsp() {
  console.clear();
  console.log('3 anos depois...');
  console.log();
  console.log();
  console.log('Guarda Real:    Senhor ' + nome + ', nós recebemos um documento de um reino que não quis se declarar. Aparentemente eles querem nos ajudar!');
  console.log('    Um reino desconhecido ouviu que ' + nome + ', o novo rei de Annir, queria criar um reino próspero e pacífico. Sabendo disso, o reino desconhecido quer lhe dar uma grande quantia de ouro como uma forma de ajudar a sua "Nova Annir".');
  var PlayerReinoProsp = prompt(`O que você irá fazer?;
[x] Aceitar;
[y] Recusar `);
  if (PlayerReinoProsp == 'X' || PlayerReinoProsp == 'x') {
    funReinoColapso();
  } else if (PlayerReinoProsp == 'Y' || PlayerReinoProsp == 'y') {
    funPazReino();
  } else {
    funPlayerReinoProsp();
  }
}
;
function funReinoColapso() {
  console.clear();
  console.log(nome + ':    MEU DEUS! Essa quantia vai nos ajudar muito! Eu não acho que eles fariam mal para a gente, irei aceitar a ajuda.');
  console.log();
  console.log('Algumas semanas depois...');
  console.log();
  console.log();
  console.log(nome + ':    Guarda Jefferson, o que é esse barulho alto de passos vindo do portão? Poderia ver para mim?');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Guarda Real:    Senhor... EVACUE O LOCAL IMEDIATAMENTE! É UMA ARMADI-');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('    O seu guarda acaba de ser acertado por uma flecha na cabeça.');
  console.log('    Aceitando o pedido, ' + nome + ' acaba de cair em uma armadilha, abrindo os portões de Annir e permitindo a entrada do exército do reino desconhecido, cujo os mesmos roubaram e destruíram as propriedas da atualmente devastada "Nova Annir".');
  console.log('FINAL RUIM 2');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  fun1();
}
;
function funPazReino() {
  console.clear();
  console.log(nome + ':    Essa quantia é, estranhamente grande... Ainda mais vindo de um reino que não quis declarar o seu nome, eu vou é recusar isso.');
  console.log();
  console.log('    Recusando o pedido, ' + nome + ' acaba não caindo na armadilha do reino desconhecido, cujo o mesmo queria saquear a "Nova Annir".');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('    Após anos terem se passado, ' + nome + ' consegue instaurar a paz no seu novo reino e se sente realizado e feliz com a sua conquista.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log(nome + ':    Senhoras e senhores, moradores de Nova Annir! Eu declaro oficialmente que nosso reino entrou em estado de tranquilidade absoluta! Enquanto não tivermos nenhum ataque, posso dizer para vocês, queridos moradores, que o nosso reino prosperará por muito tempo!');
  console.log('FINAL BOM 1');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  fun1();
}
;
function funTirania() {
  console.clear();
  console.log(nome + ':   Senhoras e senhores, moradores da nossa Nova Annir, agora que vencemos, nós devemos demonstrar a nossa superiorade para toda a região. Nós devemos conquistar mais e mais reinos, crescendo cada vez mais! Quem está comigo?');
  console.log();
  console.log('População:    *gritos de saudação ao rei*');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('    A ganância e a soberba sobem na mente de ' + nome + ', fazendo com que ' + nome + ' queira obter o poder dos outros para si mesmo. Para fazer isso, ' + nome + ' precisa conquistar outros reinos.');
  var Tirania = prompt(`Qual reino você quer atacar?;
[x] O reino vizinho;
[y] O reino dos elfos negros, raça odiada por natureza `);
  if (Tirania == 'X' || Tirania == 'x') {
    funAtVizinho();
  } else if (Tirania == 'Y' || Tirania == 'y') {
    funLolth();
  } else {
    funTirania();
  }
}
;
function funAtVizinho() {
  console.clear();
  console.log('    Comparado ao reino vizinho, a "Nova Annir" tem um poder muito superior, e a conquista foi fácil.');
  console.log();
  console.log(nome + ' Vitória! Tudo é nosso senhores, aproveitem o gosto da conquista!');
  var AtVizinho = prompt(`O que deseja fazer com o reino destruído?;
[x] Roubar tudo;
[y] Matar todos e roubar tudo `);
  if (AtVizinho == 'X' || AtVizinho == 'x') {
    funRouboFun();
  } else if (AtVizinho == 'Y' || AtVizinho == 'y') {
    funCorrompido();
  } else {
    funAtVizinho();
  }
}
;
function funRouboFun() {
  console.clear();
  console.log(nome, 'obteve uma enorme quantida de ouro e novos moradores para o seu reino, fazedo com que ' + nome + ' se sinta realizado, possuindo uma enorme fortuna.');
  console.log();
  console.log('Com essa vitória, senhoras e senhoras, conseguiremos dar prosperidade ao nosso reino. Qual será o próximo agora?');
  console.log('FINAL BOM 2');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  fun1();
}
;
function funCorrompido() {
  console.clear();
  console.log('    De repente, memórias começaram a voltar na cabeça de ' + nome + '... Casas destrúidas, draconatos mortos, ovos destruídos... ' + nome + ' começa a ficar com a cabeça pesada.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log(nome + ' foi corrompido pelo poder, e sem nem mesmo sequer pensar, fez o mesmo que as pessoas que devastaram o seu reino natal, um completo massacre.');
  console.log('FINAL RUIM 3');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  fun1();
}
;
;
function funLolth() {
  console.clear();
  console.log(nome + ' sente que o ar está ficando mais frio ao seu redor...');
  console.log(nome + ' não pensou em suas escolhas. A "Nova Annir" foi completamente devastada pela fúria de Lolth, a deusa dos elfos negros e a Rainha das Aranhas, numa tentiva de proteger os elfos negros do ataque do reino de ' + nome + '.');
  console.log('FINAL RUIM 4');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  fun1();
}
;
function funEscada() {
  console.clear();
  console.log(nome + 'desce pela longa escada da igreja, se esbarrando em um cavaleiro, que por ali andava...');
  console.log();
  console.log('Cavaleiro:    Ei cara! Qual é o seu problema?');
  var cavaleiroSus = prompt(`;
[x] Confrontar o cavaleiro.;
[y] Pedir gentilmente para o cavaleiro se retirar.;
 `);
  if (cavaleiroSus == 'x' || cavaleiroSus == 'X') {
    funVenceBriga();
  }
  else if (cavaleiroSus == 'y' || cavaleiroSus == 'Y') {
    funCerveja();
  } else {
    funEscada();
  }
}
;
function funRykidhAtaque() {
  console.clear();
  console.log('    Você está num acampamento na floresta de Warwind, junto de sua elfa companheira, Lyone. Você deixa de controlar ' + nome + 'e passa a controlar Rikydh, um elfo negro forasteiro.');
  console.log();
  console.log('    Um barulho estranho paira sobre os arbustos próximos.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Lyone:    Rikydh, você ouviu isso!? Tem algum ser vivo atrás daquela folhagem.');
  console.log();
  console.log('Rikydh:    Lyone, pegue sua cimitarra e fique atrás de mim, ele pode nos atacar a qualquer momento!');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('    E vocês estavam certos, havia alguém ali. Era um outro drow, segurando uma adaga e ameaçando a vida dos dois elfos que por ali acampavam.');
  console.log();
  console.log('Drow Estranho:    Hehehe... eu sabia... sabia que o drow que estava por aí roubando era você, Rikydh, seu traidor.');
  console.log();
  console.log('   Rikydh não o respondeu, com olhar desprezo olhando para o drow estranho.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Drow Estranho:    E quem é essa garota? Uma elfa da floresta? Espera aí, reconheço esses belos traços, ela é uma dos elfos que a nossa própria raça de drows queimou por completo o reino deles, HEHEHAHA!');
  console.log();
  console.log('    Rikydh percebeu, mesmo dificilmente, o olhar triste de Lyone.');
  console.log('Rykidh:    Afinal, o que você quer de mim? Fala logo! Pare de insinuar sobre minha companheira ou eu acabo com você.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Drow Estranho:    Ok, ok, vou ser direto ao ponto! Eu quero a sua cabeça! Hehehe...');
  console.log();
  console.log('    Em seguida, o drow estranho lança uma adaga sob Rikydh. Que por sorte, desvia do ataque, mas acaba levando uma ferida em sua bochecha, pela adaga ter passado de raspão.');
  console.log();
  console.log('Como você deseja atacar?');
;
  var ataque = prompt(`;
    [x] Usar rapieira;
    [y] Usar truque;
     `);
  if (ataque == 'x' || ataque == 'X') {
    funDrowCima();
  } else if (ataque == 'y' || ataque == 'Y') {
    funTruqueEscolha();
  } else {
    funRykidhAtaque();
  }
}
;
function funVenceBriga() {
  console.clear();
  console.log('Cavaleiro: É... Você é realmente muito forte... Eu não devia ter entrando em seu caminho, me desculpe.');
  console.log();
  console.log('    O cavaleiro vai embora em direção ao castelo e sai do seu caminho, lhe permitindo passar.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  funSeguirSozinho();
}
;
function funCerveja() {
  console.clear();
  console.log(nome + ':    Ei, ei, espera aí! O senhor está falando com um membro da igreja, pode me dar licença, por favor?');
  console.log('Cavaleiro:   Que se dane a igreja, cara! Não me importo com a sua classe social.');
  console.log('    Enquanto vocês dois estão debatendo, um homem de idade com roupas de grife e de símbolos religiosos surge, cuspindo no chão e resmungando:');
  console.log();
  console.log("Clero de Annir:   Tinham que ser esses plebeus nojentos!");
  prompt('Aperte qualquer tecla para prosseguir.');
  console.clear();
  console.log('    Você se chega mais perto do cavaleiro, com cautela para que ninguém perceba, e susurra em seu ouvido:');
  console.log(nome + ':    Peço que o senhor saia deste lugar. Não quero buscar problemas com você e nem te causar demais problemas.');
  console.log();
  console.log('    O cavaleiro então, retorna uma mensagem:');
  prompt('Aperte qualquer tecla para prosseguir.');
  console.clear();
  console.log('Cavaleiro:    Ok! Então vamos lá. Você não aceita uma cerveja? Eu pago.');
  const cerveja = prompt(`;
  [x] aceitar cerveja.;
  [y] recusar cerveja. `);
  if (cerveja == 'x' || cerveja == 'X') {
    funPagar();
  }
  else if (cerveja == 'y' || cerveja == 'Y') {
    ;
    funSeguirSozinho();
  } else {
    funCerveja();
  }
}
;
function funPagar() {
  console.clear();
  console.log(nome + ':    Claro! Uma cervejinha nunca é demais...');
  console.log();
  console.log('Você e seu novo companheiro partem para a taverna mais próxima, a Taverna do Urso Desconhecido, onde os habitantes mais tranquilos se reúnem para beber e passar a noite se divertindo.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log(nome, 'e seu companheiro sentam-se numa mesa ao canto. A garçonete e dona da taverna, Sarah, chega em sua mesa para servi-los:');
  console.log('Sarah:    Bom dia, senhores! O que vão querer hoje? Temos salsicha cozida com queijo picante, camarão assado e legumes temperados com ervas...');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log(nome + ':    Na verdade, hoje só queremos bebida, por favor.');
  console.log('Você decide que pagará toda a conta, qual bebida escolherá?');
  const bebida = prompt(`;
  [x] bebida forte.;
  [y] bebida fraca. `);
  if (bebida == 'y' || bebida == 'Y') {
    funIntEsfriar();
  }
  else if (bebida == 'x' || bebida == 'X') {
    ;
    funBebado();
  } else {
    funPagar();
  }
}
;
function funIntEsfriar() {
  console.clear();
  console.log(nome + ':    Quero dois hidroméis, por favor.');
  console.log('Yoru:    Ei! Mas eu não lhe disse que pagaria a cerveja?');
  console.log(nome + ':    Pode ficar tranquilo! Eu pago... não quero que você gaste seu dinheiro.');
  console.log();
  console.log('O cavaleiro fica surpreso e aceita. Sarah pega as bebidas, agradecendo pelo pedido.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Cavaleiro:    Mas então, meu caro... qual é o seu nome? Eu me chamo Yoru Sakai, mas você pode me chamar só de Yoru mesmo.');
  console.log(nome + ':    Meu nome é ' + nome + '.');
  console.log('Yoru:    ' + nome + '? Ok! Prazer, ' + nome + '.');
  console.log('Sarah chega com os dois hidroméis na mesa.');
  console.log(nome + ' percebe que as duas bebidas estavam um pouco quentes.');
  const esfriar = prompt(`;
  [x] Usar poder de gelo para esfriar a bebida.;
  [y] Apenas ignorar.;
   `);
  if (esfriar == 'x' || esfriar == 'X') {
    funEsfriar();
  }
  else if (esfriar == 'y' || esfriar == 'Y') {
    funCont();
  } else {
    funIntEsfriar();
  }
}
;
function funBebado() {
  console.clear();
  console.log('    Depois de alguns minutos, ' + nome + ' começa a se sentir embriagado...');
  console.log(nome + ':    Oooolha cara, eu, eu não sei se eu tô ficando bem não, hahahaha...');
  console.log('Mesmo embriagado, você ainda quer beber mais. O que você irá fazer?');
  var bebado = prompt(`;
  [x] Continuar bebendo;
  [y] Parar de beber;
   `);
  if (bebado == 'x' || bebado == 'X') {
    funBeberMais();
  } else if (bebado == 'y' || bebado == 'Y') {
    funPararBeber();
  } else {
    funBebado();
  }
}
;
function funBeberMais() {
  console.clear();
  console.log(nome + ':    Olha cara, eu acho que, eu, eu vou... Eu...');
  console.log(nome + ' não aguenta a embriaguez e acaba dormindo no chão da taverna, acordando no próximo dia de frente com o padre em sua sala.');
  console.log();
  console.log('Padre:    Você falhou, imundo. Após esta derrota, terei de remover vosso cargo de paladino da igreja. Não volte nunca mais.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  funMasmorra();
}
;
function funPararBeber() {
  console.clear();
  console.log(nome + ':    Hahahaha... Foi mal mas eu não vou mais beber por agora, não estou mais aguentando.');
  console.log('Após os dois entrarem numa conversa sobre a missão dada pelo padre, ' + nome + ' mente sobre sua missão por efeito de sua embriaguez.');
  console.log();
  console.log(nome + ':    Como assim? Eu não tenho nenhuma missão pra fazer não poxa, só vim aqui me divertir... Hehehe... Hahaha... Ai ai...');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Cavaleiro:    Como não? Você não estava indo procurar por dois elfos?');
  console.log();
  console.log(nome + ':    Espera, como é que você sabe? Hehe.');
  console.log();
  console.log('Cavaleiro:    Olha, eu não gostei muito do fato de você estar mentindo para mim, acho que você não é muito confiável...');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Cavaleiro:    Mas enfim, eu gostei de beber junto com você! Mas acho que é melhor eu já ir embora, te vejo por aí.');
  console.log('    O cavaleiro vai embora da taverna sem explicar como sabia de tal missão e sem ao menos dizer o seu nome. ' + nome + ' sente que perdeu a confiança do cavaleiro após mentir sobre sua missão.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('    Após o efeito da bebida cessar, ' + nome + ' paga a conta no balcão e decide ir embora para realizar sua missão.');
  console.log();
  console.log('Sarah:    Muito obrigada senhor!');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  funRykidhAtaque();
}
;
;
function funEsfriar() {
  console.clear();
  console.log(nome + ':    Mas então, você pode me dar sua bebida? Quero te mostrar uma coisa.');
  console.log(nome + ' pega a bebida e da um sopro congelante, resfriando-a.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log(nome + ':    Eaí, vai querer ou não?');
  console.log('Yoru:    Eh, então... acho que não. Obrigado.');
  console.log(nome + ':    Qual foi? Pode conferir aí, tá geladinha, fiote!');
  console.log('    Yoru, mesmo enojado com a situação, coloca o dedo na bebida para conferir se a bebida realmente esfriou.');
  console.log();
  console.log(nome + ':    Bom, se você não quiser... pode deixar que eu bebo.');
  console.log('Depois da fala de ' + nome + ', Yoru instantaneamente vira todo o hidromel para dentro de sua garganta, esvaziando o copo completamente.');
  prompt(`Aperte qualquer tecla para seguir.`);
}
;
function funCont() {
  console.clear();
  console.log('Yoru:    Bom, mas continuando... você está procurando por dois elfos, e um deles é um drow, certo?');
  console.log(nome + ':    Bem... sim, mas como você sabe disso?');
  console.log('Yoru:    Cara, na verdade eu só sei disso porquê uns guardas me contaram sobre terem visto dois elfos na floresta, vi até no jornal da cidade hoje de manhã.');
  console.log(nome + ':    Ah, sim... é exatamente isso. Aliás, deixa eu te falar uma coisa, aproveitando que ninguém de alto cargo está nesta taverna?');
  console.log('Yoru:    Bom, claro, só fale mais baixo.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log(nome + 'Então Yoru... na verdade eu estou achando essa missão bem suspeita. O padre geralmente sempre nos dá uma missão com mais pessoas incluídas e não uma só, além de que eu senti ele dizer de uma maneira como se a missão fosse exclusiva para mim, ele nunca me entregou uma missão assim.');
  console.log();
  console.log('Yoru:    Bom, vou te falar o que eu sei. A igreja já fez várias missões "suicidas", pelo o que alguns cavaleiros já me dizeram. Em uma das missões, trinta pessoas foram fazer algum objetivo que o padre pediu sem dar explicações e apenas dezoito pessoas voltaram.');
  console.log(nome + ':    Mas se sabe o paradeiro das outras 12 pessoas? Sabe se foram encontradas mortas ou algo assim?');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Yoru:    Aparentemente não, pois ninguém nunca mais falou sobre e isso foi esquecido com o tempo.');
  console.log();
  console.log(nome + ':    Para ser sincero, às vezes eu realmente percebo que alguns paladinos somem do batalhão sem algum motivo aparente, mas acho que dessa vez não é uma armadilha. O padre me especificou qual eram os alvos e me disse o local, além de ser bem perto de nosso reino.');
  console.log('Yoru:    Bom.... Se você diz tudo bem.');
  console.log();
  console.log('    Yoru pede para Snjólétt se ele poderia pagá-lo mais uma cerveja, e Snjólétt aceita o pedido, só não sabia qual era a bebida.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log(nome + ':    Sarah, poderia nos dar mais duas bebidas, por favor?');
  console.log('Sarah:    Claro! O que desejam?');
  console.log(nome + ':    Bem, eu vou querer...');
  console.log(nome + ' é interrompido pela voz de Yoru.');
  console.log();
  console.log('Yoru:    Duas vodkas, por favor!');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log(nome + ':   O QUÊ?!?! VOCÊ TÁ MALUCO?');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Yoru:    O que foi? Você tem bastante grana, deve ter dinheiro para pagar duas bebidas mais caras.');
  console.log();
  console.log('Pagar ou não pagar? Eis a questão.');
  var falindo = prompt(`;
    [x] Pagar;
    [y] Não pagar;
     `);
  if (falindo == 'x' || falindo == 'X') {
    console.clear();
    console.log(nome + ' tinha apenas 30 moedas sobrando em seu bolso, e pedir dois copos de vodka iria acabar com todas elas.');
    console.log(`    Enquanto ` + nome + ` estava indo realizar o pedido, ` + nome + ` escuta uma voz ranzinza vindo dos fundos da taverna.;
      Vitor, o marido de Sarah, sai do estoque da taverna com dois baldes cheios até o topo de vodka`);
    console.log(' ');
    console.log('Vitor:    Dá uma olhadinha aqui Sarah, tem bebida até o talo, pode servi-los.');
    console.log(' ');
    console.log('Sarah:   Mas amor... Você não acha que... Ah tá bom, sirva-os.');
    prompt('Aperte qualquer tecla para seguir.');
    console.clear();
    console.log(nome + ':    Olha Yoru, está muito caro, então eu vou pagar um copo só para você.');
    console.log(' ');
    console.log('Yoru:    Tudo bem, isso é muita bondade de sua parte, HAHAHAHAHA!');
    console.log(' ');
    console.log('Sarah:    Obrigada pelo pedido senhor!');
    console.log(' ');
    console.log('    Após Yoru ter terminado de virar o seu copo de vodka, os dois voltam a conversar.');
    prompt('Aperte qualquer tecla para seguir.');
    console.clear();
    funAjudaMissao();
  } else if (falindo == 'y' || falindo == 'Y') {
    funAjudaMissao();
  } else {
    funCont();
  }
}
;
function funAjudaMissao() {
  console.clear();
  console.log('Yoru:    Cara, ultimamente eu tô bem entediado, eu posso me juntar a você? Andar junto e te ajudar, algo assim.');
  console.log();
  console.log('Olha... Vou pensar...');
  var ajudaMissao = prompt(`Você quer levar Yoru para sua jornada?;
 [S/N] `);
  if (ajudaMissao == 's' || ajudaMissao == 'S') {
    funJuntaYoru();
  } else if (ajudaMissao == 'n' || ajudaMissao == 'N') {
    console.clear();
    console.log('Yoru:    Bom... Então tudo bem.  Foi muito divertido ter passado o tempo com você aqui! Te vejo em um dia desses.');
    console.log(' ');
    console.log('    Yoru sai da taverna.');
    prompt('Aperte qualquer tecla para seguir.');
    console.clear();
    funSeguirSozinho();
  } else {
    funAjudaMissao();
  }
}
;
function funJuntaYoru() {
  console.clear();
  console.log(nome + ':    Pode sim, mas nessa missão eu não recomendo muito que você vá comigo, mas pode fazer algo para mim?');
  console.log();
  console.log('Yoru:    Posso sim, o que seria?');
  console.log(nome + ':    Sabe aquela grande casa um pouco elevada, ao lado da floresta? Pode ficar me vigiando nela? Essa missão provavelmente não é uma armadilha, mas eu ainda desconfio dela...');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Yoru:    Aquela casa destruída pelo tornado de anos atrás? Mas ela está só nos escombros.');
  console.log();
  console.log(nome + ':    Você poderia se esconder entre eles. O telhado e partes das paredes ainda sobraram da destruição.');
  console.log();
  console.log('Yoru:    Bom... então tudo bem! Aceito o compromisso.');
  console.log('Snjólétt estava indo perguntar se Yoru não acha que está bebendo muito, mas quando iria perguntar, o seu copo de vodka já estava vazio. Os dois então decidem sair da taverna com as bebidas pagas e vão em direção à floresta e ao casarão destruído.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  funRykidhAtaque();
}
;
;
function funDrowCima() {
  console.clear();
  console.log('    Você e Lyone atacam o drow estranho, mas não obtiveram um sucesso, errando o ataque.');
  console.log('    O elfo negro parte para cima novamente, o que você irá fazer agora?');
  var ataque2 = prompt(`;
    [x] Usar truque;
    [y] Usar rapieira novamente;
    [Z] Desviar do inimigo;
     `);
  if (ataque2 == 'x' || ataque2 == 'X') {
    funTruqueEscolha();
  } else if (ataque2 == 'y' || ataque2 == 'Y') {
    funDrowMorre();
  } else if (ataque2 == 'z' || ataque2 == 'Z') {
    console.log('    Você desvia do seu oponente e ele acaba acertando Lyone, fazendo-a sangrar até a morte em seus braços.');
    console.log('FINAL RUIM 5');
    prompt('Aperte qualquer tecla para seguir.');
    console.clear();
    fun1();
  } else {
    funDrowCima();
  }
}
;
function funTruqueEscolha() {
  console.clear();
  console.log('    Qual truque deseja utilizar contra o Drow?');
  var truque = prompt(`;
    [x] Truque do Sono;
    [y] Truque do Sussurro Dissonante;
     `);
  if (truque == 'x' || truque == 'X') {
    funDrowSono();
  } else if (truque == 'y' || truque == 'Y') {
    funDrowSangue();
    console.clear();
  } else {
    funTruqueEscolha();
  }
}
;
function funDrowSangue() {
  console.clear;
  console.log('    Você usa o truque do Susurro Dissonante.');
  console.log();
  console.log('Rikydh chega próximo ao drow estranho e susurra algo indecifrável em seu lado, fazendo o oponente correr em desespero e perder a audição de um de seus ouvidos.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Rikydh:    Saia daqui.');
  console.log('    Para a finalização do combate, Lyone usa seu truque druida de Rajada de Veneno, na qual lança um gás tóxico na direção do inimigo.');
  console.log('    O drow está caído no chão, tendo uma hemorragia que aparenta piorar cada vez mais..');
  console.log();
  console.log('    O que você irá fazer agora?');
  var finalizar = prompt(`;
    [x] Fugir do local;
    [y] Terminar de matar o drow;
     `);
;
  if (finalizar == 'x' || finalizar == 'X') {
    funDrowMorre();
  } else if (finalizar == 'y' || finalizar == 'Y') {
    funElfosCasa();
  } else {
    funDrowSangue();
  }
}
;
function funDrowSono() {
  console.clear();
  console.log('    Você pega seu instrumento musical, um bandolim, e começa a cantarolar uma música calma de língua élfica.');
  console.log();
  console.log('Drow Estranho:   HEHEHE! VOCÊ ACHA MESMO QUE VAI ME FAZER DORM-');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('    O drow cai no chão e começa a dormir igual a um bebê.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('    O que você vai fazer agora?');
;
  var fugirAtacar = prompt(`;
      [x] Fugir do local;
      [y] Atacar;
   `);
  if (fugirAtacar == 'x' || fugirAtacar == 'X') {
    funElfosCasa();
  } else if (fugirAtacar == 'y' || fugirAtacar == 'Y') {
    funDrowMorre();
  } else {
    funDrowSono();
  }
}
;
function funDrowMorre() {
  console.clear();
  console.log('    Você pega sua arma e esfaqueia as costas do drow, fazendo-o sangrar até a morte.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  funElfosCasa();
}
;
function funElfosCasa() {
  console.clear();
  console.log('    Após Rykidh e Lyone analisarem sua atual situação, os dois decidem sair do local.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Rykidh:    Lyone, é melhor sairmos desse acampamento... tudo está destruído e eu não tenho certeza se esse drow era o único daqui.');
  console.log();
  console.log('Lyone:    Mas, onde nós iriamos? Não consego ver um saída boa deste local.');
  console.log();
  console.log('    Rykidh começa a observar os horizontes, e observa um construção na direção do reino de Annir.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Rykidh:    Ali! Acho que eu estou vendo um casarão destruído em direção a Annir. Não é o melhor dos lugares mas talvez nós poderíamos nos esconder lá até a situação melhorar.');
  console.log();
  console.log('Lyone:    Bem... não tenho muita certeza se irá funcionar, mas não temos outra opção. ');
  console.log();
  console.log('Após alguns minutos andando pela floresta, os dois forasteiros chegam no casarão.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('    Os dois elfos começam a observar as áreas do casarão destruído.');
  console.log();
  console.log('Rikydh:    Lyone, onde você prefere ficar? O telhado parece uma boa opção, mas o andar de baixo parece um pouco mais confortável.');
  console.log();
  console.log('Lyone:    Não tenho muita certeza...');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
;
  var elfosCasa = prompt(`Onde você deseja ficar?;
    [x] Andar de baixo;
    [y] Telhado;
     `);
  if (elfosCasa == 'x' || elfosCasa == 'X') {
    funYoruVSElfos();
  } else if (elfosCasa == 'y' || elfosCasa == 'Y') {
    funYoruCasa();
  } else {
    funElfosCasa();
  }
}
;
function funAmizadeNova() {
  console.clear();
  console.log(`Rykidh:    Nós somos dois elfos que acabaram de voltar de uma batalha muito cansativa contra outro elfo negro na floresta de Warwick, e esse foi o único lugar que achamos para nos abrigarmos.;
     Eu sempre fui rejeitado por outros elfos negros por não seguir a mesma ideologia cruel que a deles, e nunca quis causar mal à ninguém! Eu queria que as pessoas parassem de nos procurar por conta de minha linhagem, pois eu sou inocente e estou apenas passando por dificuldades!`);
  console.log();
  console.log('    Yoru começa a sentir pena dos dois elfos...');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Yoru:    Caraca... Eu acho que as vezes nem sempre nós precisamos seguir ordens, eu acredito na história de vocês!');
  console.log();
  console.log('    Yoru estende sua mão para Rykidh, como uma forma de demonstrar empatia.');
  var amizadeNova = prompt(`Você aceita o aperto de mão de Yoru?;
    [S/N];
      `);
;
  if (amizadeNova == 's' || amizadeNova == 'S') {
    console.clear();
    console.log('Yoru:    Vamos ser bons amigos agora! Hahahaha.');
    prompt('Aperte qualquer tecla para seguir.');
    console.clear();
    console.log('    Rykidh e Lyone conseguem a confiança de Yoru, mesmo utilizando de disfarces.');
    console.log('FINAL VERDADEIRO 1');
  } else if (amizadeNova == 'n' || amizadeNova == 'N') {
    console.clear();
    console.log('    Achei que podia confiar em vocês...');
    funRykidhMorte();
  } else {
    funAmizadeNova();
  }
}
;
function funYoruVSElfos() {
  console.clear();
  console.log('    Após alguns minutos sentados no andar de baixo, Rykidh e Lyone veem um cavaleiro alto e com traços asiáticos abrindo a porta.');
  console.log();
  console.log('    Finalmente cheguei nessa parada, agora é só observar ' + nome + ' entrando na flore-');
  console.log();
  console.log('    Yoru fica em silêncio após observar, sentados no chão, dois elfos com a mesma descrição dada por ' + nome + '.');
  console.log('Yoru:    Hahahaha... Olha só quem eu achei aqui não é mesmo!');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Rykidh:    SENHOR, SE ACALME, POR FAVOR! Nós estamos apenas tentand-');
  console.log();
  console.log('Yoru:    Não importa! Vocês estão sendo procurados pela igreja de Annir, e não devem estar vivos!');
  console.log();
  console.log('    Yoru saca sua espada e parte para atacar Rykidh e Lyone');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
;
  var yoruVSElfos = prompt(`Você está tentando sair ileso de Yoru. O que deseja fazer?;
    [x] Tentar conversar;
    [y] Atacar;
     `);
;
  if (yoruVSElfos == 'x' || yoruVSElfos == 'X') {
    funDesconfianca();
  } else if (yoruVSElfos == 'y' || yoruVSElfos == 'Y') {
    funRykidhMorte();
  }
}
;
function funDesconfianca() {
  console.clear;
  console.log('Rykidh:    CALMA, EU PRECISO TE EXPLICAR UM POUCO!');
  console.log();
  console.log('    Yoru fica interessado em ouvir o elfo negro e decide parar o ataque.');
  console.log();
  console.log('Yoru:    Ah... Tá bom vai... Fiquei curioso.');
;
  var desconfianca = prompt(`O que você quer contar para Yoru?;
      [x] A verdade;
      [y] Uma mentira;
       `);
;
  if (desconfianca == 'x' || desconfianca == 'X') {
    funAmizadeNova();
  } else if (desconfianca == 'y' || desconfianca == 'Y') {
    console.log('Rykidh:    Nós não somos os tais dos elfos que você está procurando! Nós moramos na região sul do Reino de Annir e eu apenas trouxe minha namorada em um lugar diferente para ficar!');
    console.log();
    console.log('Lyone:    Na-na-namorada? Mas nós n-não estamo namo... namo...');
    console.log();
    console.log('Yoru:    Olha, desculpa, mas eu não consigo acreditar numa história dessas. Vou ter que matar vocês.');
    prompt('Aperte qualquer tecla para seguir.');
    console.clear();
    funRykidhMorte();
  }
}
;
function funRykidhMorte() {
  console.clear();
  console.log('    Rykidh tenta atacar Yoru mas ele desvia do ataque e acaba empalando a barriga de Rykidh com sua espada. Com muita dor e agonia, Rykidh diz suas últimas palavras.');
  console.log();
  console.log('Rikydh: L-Lyone... Saiba que eu, eu sempre i-irei te amar, e saiba que eu, eu tentei te proteger...');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Rykidh não aguenta o sangramento e morre jogado no chão do casarão.');
  console.log();
  console.log('Lyone: NÃO, NÃO, EU NÃO QUERO ACEITAR, VOCÊ É UM MONSTRO! VOCÊ DESTRUIU TUDO QUE EU TINHA NA MINHA VIDA!');
  console.log();
  console.log('Yoru:    Eu queria muito não ter que fazer isso com ele, mas ordens são ordens. E infelizmente... Você também está incluída nela.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('    Yoru corre na direção de Lyone e corta sua cabeça fora, finalizando assim a missão que ' + nome + ' havia recebido.');
  console.log('FINAL RUIM 6');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  fun1();
}
;
function funYoruCasa() {
  console.clear();
  console.log('     Após alguns minutos no telhado observando a noite estrelada, Rykidh decide entrar em transe enquanto Lyone fica acordada para fazer a guarda dos arredores.');
  console.log();
  console.log(' * transe: habilidade élfica de descando, geralmente ficam por quatro horas, elfos não dormem. *');
  console.log();
  console.log('Rykidh:    Boa noite Lyone.');
  console.log();
  console.log('Lyone: Boa noite Rykidh!');
  console.log();
  console.log('    Lyone deita no ombro de Rykidh, enquanto observa os horizontes do casarão.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Lyone:    Rykidh! Rykidh! Acorda! Tem alguém entrando no casarão!');
  console.log();
  console.log('Rykidh:    O que? Como assim?');
  console.log('Os dois observam um cavaleiro alto com traços asiáticos entrando pela porta.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Rykidh:    Se acalme, Lyone, nós vamos pensar em alguma coisa!');
  console.log();
;
  var yoruCasa = prompt(`O que você deseja fazer para evitar a situação?;
  [x] Esperar Yoru ir embora;
  [y] Se disfarçar de humano e dialogar`);
;
  if (yoruCasa == 'x' || yoruCasa == 'X') {
    console.clear();
    console.log('Lyone:    Eu acho melhor ficarmos em silêncio e espera-lo sair...');
    console.log();
    console.log('Rykidh:    Bom... Eu acho melhor.');
    console.log();
    console.log('    Os dois elfos esperam Yoru entrar no casarão e saem do local pelo telhado, indo até a direção da cidade.');
    prompt('Aperte qualquer tecla para seguir.');
    console.clear();
    console.log('CONTINUA...');
    console.log();
    console.log('FINAL VERDADEIRO 2');
  } else if (yoruCasa == 'y' || yoruCasa == 'Y') {
    funYoruConfianca();
  }
}
;
function funYoruConfianca() {
  console.clear();
  console.log('    Você decide usar seu truque de disfarce, usando maquiagens que Lyone possuía em sua bolsa.');
  console.log('Rikydh:    Já sei! Lyone, pegue seu kit de maquiagem e me transforme em um humano! Nós podemos fingir que você é uma adolescente qualquer passando fome, esse cavaleiro tem cara de bobão, certeza que vai acreditar.');
  console.log('Lyone:    Boa ideia!');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('    Lyone pega suas maquiagens e transforma completamente a aparência de Rikydh, escondendo suas orelhas e o tornando-o com uma pele totalmente branca, como se fosse um camponês normal vivendo em seu casarão.');
  console.log();
  console.log('Yoru:    Finalmente cheguei nessa parada, agora é só observar ' + nome + ' entrando na floresta e tá tudo certo!');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('    Yoru abre a porta, e se depara com um homem alto de pele branca em sua frente.');
  console.log('Yoru:    Oi, bom dia...? Desculpe, não sabia que alguém vivia nessa residência.');
  console.log();
  console.log('Yoru olha por dentro da casa e vê que o local estava bem destruido.');
  console.log('Rikydh:    Bom dia, caro senhor cavalheiro! O que buscas aqui em minha amável residência?!');
  console.log();
  console.log('Yoru:    Bem, apenas vim conferir se alguém ainda morava por aqui, este lugar não está habitável há meses.');
  console.log('Rikydh:    Ah sim! É que eu me mudei essa semana...');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('    Yoru percebe que há uma elfa atrás do homem, sentada no canto das paredes.');
  console.log();
  console.log('Yoru:    Bom, tudo bem... Mas quem é aquela elfa atrás de você?');
  console.log();
  console.log('Rykidh:    Ah, ela é uma garota que resgatei a pouco tempo... Ela passa por dificuldades financeiras e muita fome, e nos estados mais críticos precisava até roubar comida para sobreviver. Decidi levá-la comigo para poder cuidá-la.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('Yoru:    Ah, entendo... Posso ficar neste local? Um amigo meu pediu para vigiá-lo por aqui.');
  console.log();
  console.log('Rykidh:    Claro que pode senhor! Acomode-se.');
  console.log();
  console.log('    Yoru ganha a confiança de Rikydh, e assim, ainda continua de espreita no casarão.');
  prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log('CONTINUA...');
  console.log('FINAL VERDADEIRO 1');
}