//FATEC Diadema - Luigi Papaiz
//Curso Desenvolvimento de Sorftware Multiplataforma - DSM
// Diciplina Tecinicas de programação II
//Nome: Kaue Henrique dos Santos data: 23/02/2024
//Nome: Thiago Messias           data: 23/02/2024
//Descrição: Aplicação de padrão GoF - Pizzaria
/*************************************************************** */
const prompt = require ('prompt-sync') ({sigint: true});
 
 
class Tamanho{
    constructor(Tipo_tamanho){
        this.Tipo_tamanho = Tipo_tamanho;
    }
}
 
class Massa {
    constructor(Tipo_massa){
        this.Tipo_massa = Tipo_massa;
    }
}
 
class Molho {
    constructor(Tipo_molho){
        this.Tipo_molho = Tipo_molho;
    }
}
 
class Proteina{
    constructor(Tipo_proteina){
        this.Tipo_proteina = Tipo_proteina;
    }
}
 
class Queijos {
    constructor(Tipo_queijos){
        this.Tipo_queijos = Tipo_queijos;
    }
}
 
class Complemento{
    constructor(Tipo_complemento){
        this.Tipo_complemento = Tipo_complemento;
    }
}
 
//Builder
class PizzaBuilder{
    constructor(){
        this.tamanho = null;
        this.massa = null;
        this.molho = null;
        this.proteina = null;
        this.queijos = null;
        this.complemento = null;
    }
 
    adicionarTamanho(tamanho){
        this.tamanho = new Tamanho(tamanho);
        return this;
    }
 
    adicionarMassa(massa){
        this.massa = new Massa(massa);
        return this;
    }
 
    adicionarMolho(molho){
        this.molho = new Molho(molho);
        return this;
    }
 
    adicionarProteina(proteina){
        this.proteina = new Proteina(proteina);
        return this;
    }
 
    adicionarQueijo(queijos){
        this.queijos = new Queijos(queijos);
        return this;
    }
 
    adicionarComplemento(complemento){
        this.complemento = new Complemento(complemento);
        return this;
    }
 
    montarPizza(){
        return new Pizza(this.tamanho, this.massa, this.molho, this.proteina, this.queijos, this.complemento);
 
    }
 
}
 
// Contruindo a Pizza
 
class Pizza{
    constructor(tamanho, massa, molho, proteina, queijos, complemento){
        this.tamanho = tamanho;
        this.massa = massa;
        this.molho = molho;
        this.proteina = proteina;
        this.queijos = queijos;
        this.complemento = complemento;
    }
 
    mostrarPizza(){
        console.log(`Tamanho: ${this.tamanho.Tipo_tamanho},
        Massa: ${this.massa.Tipo_massa},
        Molho: ${this.molho.Tipo_molho},
        Proteina: ${this.proteina.Tipo_proteina},
        Queijos: ${this.queijos.Tipo_queijos},
        Complemento: ${this.complemento.Tipo_complemento}`);
    };
}
 
// INTERFACE DO CLIENTE - UTILIZAÇÃO DO PADRÃO *********************************

let opcao = 0;

while(opcao < 1){

    const builder = new PizzaBuilder();
     
    console.log('------------------------')
    let tamanho_input = prompt('Tamanho da Pizza: ')
    let massa_input = prompt ('Massa: ')
    let molho_input = prompt ('Molho: ')
    let proteina_input = prompt ('Proteina: ')
    let queijo_input = prompt ('Queijo: ')
    let complemento_input = prompt ('Complemento: ')
    console.log("------------")
     
    const PizzaPedida = builder
        .adicionarTamanho(tamanho_input)
        .adicionarComplemento(complemento_input)
        .adicionarMassa(massa_input)
        .adicionarMolho(molho_input)
        .adicionarProteina(proteina_input)
        .adicionarQueijo(queijo_input)
        .montarPizza();
     
     
    //Monstrar as Pizzas
    console.log("Pedido")
    PizzaPedida.mostrarPizza();
    console.log("------------")


    let decisao = prompt("1 - fazer outro pedido || 2- encerrar pedido: ")

    if(decisao == 2){
        opcao = 1;
    }
     
}
