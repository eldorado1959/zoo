var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var readlineSync = require('readline-sync');
function pause() {
    readlineSync.question('< Enter > para continuar...');
}
// Definindo as Interfaces e Classes
var Passaro = /** @class */ (function () {
    function Passaro(nome) {
        this.nome = nome;
    }
    Passaro.prototype.voar = function () {
        throw new Error('metodo invalido');
    };
    return Passaro;
}());
var Mamifero = /** @class */ (function () {
    function Mamifero(nome) {
        this.nome = nome;
    }
    Mamifero.prototype.amamentar = function () {
        throw new Error('metodo invalido');
    };
    return Mamifero;
}());
var Reptil = /** @class */ (function () {
    function Reptil(nome) {
        this.nome = nome;
    }
    Reptil.prototype.rastejar = function () {
        throw new Error('metodo invalido');
    };
    return Reptil;
}());
var AnimalAquatico = /** @class */ (function () {
    function AnimalAquatico() {
    }
    AnimalAquatico.prototype.nadar = function () {
        throw new Error('metodo invalido');
    };
    return AnimalAquatico;
}());
var Aguia = /** @class */ (function (_super) {
    __extends(Aguia, _super);
    function Aguia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aguia.prototype.voar = function () {
        console.log("".concat(this.nome, " esta voando."));
        pause();
    };
    Aguia.prototype.voarRapido = function () {
        console.log("".concat(this.nome, " esta voando rapido."));
        pause();
    };
    return Aguia;
}(Passaro));
var Baleia = /** @class */ (function (_super) {
    __extends(Baleia, _super);
    function Baleia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Baleia.prototype.amamentar = function () {
        console.log("".concat(this.nome, " esta amamentando."));
        pause();
    };
    Baleia.prototype.nadarProfundo = function () {
        console.log("".concat(this.nome, " esta nadando em aguas profundas."));
        pause();
    };
    Baleia.prototype.nadar = function () {
        console.log("".concat(this.nome, " esta nadando."));
        pause();
    };
    return Baleia;
}(Mamifero));
var Iguana = /** @class */ (function (_super) {
    __extends(Iguana, _super);
    function Iguana() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Iguana.prototype.rastejar = function () {
        console.log("".concat(this.nome, " esta rastejando."));
        pause();
    };
    Iguana.prototype.mudarDeCor = function () {
        console.log("".concat(this.nome, " esta mudando de cor."));
        pause();
    };
    Iguana.prototype.nadar = function () {
        console.log("".concat(this.nome, " esta nadando."));
        pause();
    };
    return Iguana;
}(Reptil));
var RebanhoDeIguanas = /** @class */ (function () {
    function RebanhoDeIguanas() {
        this.iguanas = [];
    }
    RebanhoDeIguanas.prototype.addIguana = function (iguana) {
        this.iguanas.push(iguana);
    };
    return RebanhoDeIguanas;
}());
// Funções para Ações
function opcao01() {
    var aguia = new Aguia('Aguia');
    aguia.voarRapido();
}
function opcao02() {
    var baleia = new Baleia('Baleia');
    baleia.nadarProfundo();
}
function opcao03() {
    var iguana = new Iguana('Iguana');
    iguana.mudarDeCor();
}
function opcao04() {
    var baleia = new Baleia('Baleia');
    baleia.nadar();
}
function opcao05() {
    var iguana = new Iguana('Iguana');
    iguana.nadar();
}
function opcao06() {
    var rebanho = new RebanhoDeIguanas();
    for (var i = 0; i < 5; i++) {
        rebanho.addIguana(new Iguana("Iguana ".concat(i + 1)));
    }
    rebanho.iguanas.forEach(function (iguana) { return iguana.nadar(); });
}
function limparTela() {
    console.clear();
    var hhmmmss = [horas, minutos, segundos].join(':');
    console.log(hhmmmss.padStart(120, ' '));
}
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
    var opcao = readlineSync.question('Digite a opcao desejada: ');
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
