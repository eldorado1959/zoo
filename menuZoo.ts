const readlineSync = require('readline-sync');


function pause() {
    readlineSync.question('< Enter > para continuar...');
  }
  
// Definindo as Interfaces e Classes

class Passaro {
  constructor(nome) {
    this.nome = nome;
  }
  voar() {
    throw new Error('metodo invalido');
  }
}

class Mamifero {
  constructor(nome) {
    this.nome = nome;
  }
  amamentar() {
    throw new Error('metodo invalido');
  }
}

class Reptil {
  constructor(nome) {
    this.nome = nome;
  }
  rastejar() {
    throw new Error('metodo invalido');
  }
}

class AnimalAquatico {
  nadar() {
    throw new Error('metodo invalido');
  }
}

class Aguia extends Passaro {
  voar() {
    console.log(`${this.nome} esta voando.`);
    pause();  
  }
  voarRapido() {
    console.log(`${this.nome} esta voando rapido.`);
    pause();
  }
}

class Baleia extends Mamifero {
  amamentar() {
    console.log(`${this.nome} esta amamentando.`);
    pause();
  }
  nadarProfundo() {
    console.log(`${this.nome} esta nadando em aguas profundas.`);
    pause();
  }
  nadar() {
    console.log(`${this.nome} esta nadando.`);
    pause();
  }
}

class Iguana extends Reptil {
  rastejar() {
    console.log(`${this.nome} esta rastejando.`);
    pause();
  }
  mudarDeCor() {
    console.log(`${this.nome} esta mudando de cor.`);
    pause();
  }
  nadar() {
    console.log(`${this.nome} esta nadando.`);
    pause();
  }
}

class RebanhoDeIguanas {
  constructor() {
    this.iguanas = [];
  }
  addIguana(iguana) {
    this.iguanas.push(iguana);
  }
}

// Funções para Ações




function opcao01() {
  const aguia = new Aguia('Aguia');
  aguia.voarRapido();
  
}

function opcao02() {
  const baleia = new Baleia('Baleia');
  baleia.nadarProfundo();
}

function opcao03() {
  const iguana = new Iguana('Iguana');
  iguana.mudarDeCor();
}

function opcao04() {
  const baleia = new Baleia('Baleia');
  baleia.nadar();
}

function opcao05() {
  const iguana = new Iguana('Iguana');
  iguana.nadar();
}

function opcao06() {
  const rebanho = new RebanhoDeIguanas();
  for (let i = 0; i < 5; i++) {
    rebanho.addIguana(new Iguana(`Iguana ${i + 1}`));
  }
  rebanho.iguanas.forEach(iguana => iguana.nadar());
}

function limparTela(): void {
    console.clear();
    const hhmmmss = [horas, minutos, segundos].join(':');
    console.log(hhmmmss.padStart(120, ' ')); 
}
// Menu Interativo
function limparTela();

function menu() {
  console.log('\n [-][-][-][-][-][-][-][-][-][-][-]'); 
  console.log('\n          K A T A  ZOO');
  console.log('\n[][][][][][][][][][][][][][][][][]'); 
  console.log('\n        Escolha uma opcao:');
  console.log('      [01] Aguia  - Voar rapido');
  console.log('      [02] Baleia - Nadar profundo');
  console.log('      [03] Iguana - Mudar de cor');
  console.log('      [04] Baleia - Nadar');
  console.log('      [05] Iguana - Nadar');
  console.log('      [06] Rebanho Iguanas - Nadar');
  console.log('      [00] Sair');

  const opcao = readlineSync.question('Digite a opcao desejada: ');

  switch (opcao) {
    case '01':
      opcao01();
      break;
    case '02':
      opcao02();
      break;
    case '03':
      opcao03();
      break;
    case '04':
      opcao04();
      break;
    case '05':
      opcao05();
      break;
    case '06':
      opcao06();
      break;
    case '00':
      console.log('Saindo...');
      return;
    default:
      console.log('Opção inválida');
  }

  menu(); // Chama o menu novamente após a ação
}

// Executando o Menu

menu();
