var prompt = require('prompt-sync')();

prompt('Seja bem-vindo ao jogo RPG! Aperte qualquer tecla para prosseguir. ');
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
  console.log('    Você serve para um padre da grande igreja de Annir, cujo poder supera o poder da própria realeza.')
  console.log('    O padre lhe pediu para realizar uma missão, onde ele diz: "Eu preciso que você encontre dois elfos para mim, cujo um deles é um elfo negro. O último lugar que eles foram vistos foi na floresta de Warwick, e não me importo se você os traga vivos ou mortos."')
  var MisPadre = prompt('Você deseja aceitar a missão? [S/N] ')
  if (MisPadre == 'S' || MisPadre == 's') {
  funSaiIgreja();
  }
  else if (MisPadre == 'N' || MisPadre == 'n') {
    //proxima função
 }
}
function funSaiIgreja() {
  console.clear()
  console.log(   nome+' sai da igreja em rumo à sua missão, escolhendo por qual saída quer ir.')
  var sairIgreja = prompt(`
  [x] Ir pelo dormitório.                                                                 
  [y] Ir pela escada da igreja.
  `)
  if (sairIgreja == 'Y' || sairIgreja == 'y') {
    funEscada()
  }
 else if (sairIgreja == 'X' || sairIgreja == 'x') {
  funSeguirSozinho()
 }
}

function funEscada() {
    console.clear()
    console.log(    nome+ 'desce pela longa escada da igreja, se esbarrando em um cavaleiro, que por ali andava...')
    console.clear()
console.log('Ei cara! Qual é o seu problema?')
var cavaleiroSus = prompt(`
[x] Confrontar o cavaleiro.
[y] Pedir gentilmente para o cavaleiro se retirar.
`)
if (cavaleiroSus == 'x' || cavaleiroSus == 'X') {
    funVenceBriga()
}
else if (cavaleiroSus == 'y' || cavaleiroSus == 'Y') {
    funCerveja()
}
  }

function funVenceBriga() {
  console.clear()
  console.log('Cavaleiro: É... Você é realmente muito forte... Eu não devia ter entrando em seu caminho, me desculpe.')
  console.log( )
  console.log('    O cavaleiro vai embora em direção ao castelo e sai do seu caminho, lhe permitindo passar.')
  funSeguirSozinho();
}

function funSeguirSozinho() {
  console.clear
  console.log(    nome+' segue seu caminho sozinho, indo em direção à floresta para realizar a sua missão.')
  funRykdhAtaque();
}

 function funCerveja() {
    console.clear()
    console.log(nome+':    Ei, ei, espera aí! O senhor está falando com um membro da igreja, pode me dar licença, por favor?');
   console.log('Cavaleiro:   Que se dane a igreja, cara! Não me importo com a sua classe social.');
   console.log('    Enquanto vocês dois estão debatendo, um homem de idade com roupas de grife e de símbolos religiosos surge, cuspindo no chão e resmungando:');
   console.log( );
   console.log("Clero de Annir:   Tinham que ser esses plebeus nojentos!");
   prompt('Aperte qualquer tecla para prosseguir.');
   console.clear();
  console.log('    Você chega mais perto do cavaleiro, com cautela para que ninguém perceba, e susurra em seu ouvido:');
   console.log(nome+':    Peço que o senhor saia deste lugar. Não quero buscar problemas com você e nem te causar demais problemas.');
   console.log( );
   console.log('    O cavaleiro então, retorna uma mensagem:');
   prompt('Aperte qualquer tecla para prosseguir.');
   console.clear();
   console.log('Cavaleiro:    Ok! Então vamos lá. Você não aceita uma cerveja?');
   const cerveja = prompt(`
  [x] aceitar cerveja.
  [y] recusar cerveja.`);
 if (cerveja == 'x' || cerveja == 'X') {
   funPagar()
 }
   else if (cerveja == 'y' || cerveja == 'Y');
   console.log('Cavaleiro: Tudo bem então, te vejo por aí.')
   funSeguirSozinho()
 }

function funPagar() {
  console.clear()
  console.log(nome+':    Claro! Uma cervejinha nunca é demais...')
  console.log( );
  console.log('Você e seu novo companheiro partem para a taverna mais próxima, a Taverna do Urso Desconhecido, onde os habitantes mais tranquilos se reúnem para beber e passar a noite se divertindo.')
prompt('Aperte qualquer tecla para seguir.');
  console.clear();
  console.log(nome+' e seu companheiro sentam-se numa mesa ao canto. A garçonete e dona da taverna, Sarah, chega em sua mesa para servi-lôs:');
  console.log('Sarah:    Bom dia, senhores! O que vão querer hoje? Temos salsicha cozida com queijo picante, camarão assado e legumes temperados com ervas...');
prompt('Aperte qualquer tecla para seguir.');
console.clear();
  console.log(nome+':    Na verdade, hoje só queremos bebida, por favor.');
  console.log('Você decide que pagará toda a conta, qual bebida escolherá?')
  const bebida = prompt(`
  [x] bebida forte.
  [y] bebida fraca.`);
  if (bebida == 'x' || bebida == 'X') {
    funBebado();
  }
  else if (bebida == 'y' || bebida == 'Y');
  // próxima função
}

function funBebado() {
  console.clear()
  console.log('    Depois de alguns minutos, '+nome+' começa a se sentir embriagado...')
  console.log(nome + ':    Oooolha cara, eu, eu não sei se eu tô ficando bem não, hahahaha...')
  console.log('Mesmo embriagado, você ainda quer beber mais. O que você irá fazer?');
  var bebado = prompt(`
  [x] Continuar bebendo
  [y] Parar de beber
  `)
  if (bebado == 'x' || bebado == 'X') {
    funBeberMais()
  } else if (bebado == 'y' || bebado == 'Y');
    funPararBeber()  
}

function funBeberMais() {
  console.clear()
  console.log(nome+':    Olha cara, eu acho que, eu, eu vou... Eu...')
  console.log(    nome+' não aguenta a embriaguez e acaba dormindo no chão da taverna, acordando no próximo dia de frente com o padre em sua sala.')
  console.log( )
  console.log('Padre:    Você falhou, imundo. Após esta derrota, terei de remover vosso cargo de paladino da igreja. Não volte nunca mais.')
  funRemCargo()
}

function funPararBeber() {
  console.clear()
  console.log(nome+':    Hahahaha... Foi mal mas eu não vou mais beber por agora, não estou mais aguentando.')
  console.log('Após os dois entrarem numa conversa sobre a missão dada pelo padre, '+nome+' mente sobre sua missão por efeito de sua embriaguez')
  console.log( )
  console.log(nome+':    Como assim? Eu não tenho nenhuma missão pra fazer não poxa, só vim aqui me divertir... Hehehe... Hahaha... Ai ai...')
  console.log( )
  console.log('Cavaleiro:    Como não? Você não estava indo procurar por dois elfos?')
  console.log( )
  console.log(nome+':    Espera, como é que você sabe? Hehe')
  console.log( )
  console.log('Cavaleiro:    Olha, eu não gostei muito do fato de você estar mentindo para mim, acho que você não é muito confiável...')
  console.log( )
  console.log('Cavaleiro:    Mas enfim, eu gostei de beber junto com você! Mas acho que é melhor eu já ir embora, te vejo por aí.')
  console.log('    O cavaleiro vai embora da taverna sem explicar como sabia de tal missão e sem ao menos dizer o seu nome. '+nome+' sente que perdeu a confiança do cavaleiro após mentir sobre sua missão')
  console.log('    Após o efeito da bebida cessar, '+nome+' paga a conta no balcão e decide ir embora para realizar sua missão.')
  console.log( )
  console.log('Sarah:    Muito obrigada senhor!')
  prompt('Aperte qualquer tecla para seguir.');
  console.clear()
  funRykdhAtaque()
}

function funConfiança() {}