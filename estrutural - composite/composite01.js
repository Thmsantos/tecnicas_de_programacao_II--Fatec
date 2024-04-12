//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  12/04/2024
//Descrição: Aplicação do padrão GOF - Estrutural - Composite

//classe componentes

class Componente {

    constructor(nome) {
        this.nome = nome
    }

    adicionar() {

    }

    remover() {

    }

    obterNome() {

    }

   

}


//classe folha
class Folha extends Componente {

    constructor(nome, preco) {
        super(nome)
        this.preco = preco
    }

    obterNome() {
        return this.nome
    }

    obterPreco() {
        return this.preco
    }

}

//class container

class Container extends Componente {

    constructor(nome) {
        super(nome)
        this.componentes = []
    }

    adicionar(componente) {
        this.componentes.push(componente)
    }

    remover(componente) {
        const index = this.componentes.indexOf(componente);
        this.componentes.splice(index, 1)
    }

    obterNome() {
        return this.nome
    }

    obterPreco() {
        let preco = 0;
        this.componentes.forEach(componentes => {
            preco += componentes.obterPreco();
        })
        return preco;
    }

}

//interface de uso

const maca = new Folha('Maçã', 8.99);
const laranja = new Folha('Laranja', 3.69)
const uva = new Folha('Uva', 9,98)

const frutas = new Container('Frutas')
frutas.adicionar(maca)
frutas.adicionar(laranja)
frutas.adicionar(uva)

const caixa = new Container('Caixa de frutas')
caixa.adicionar(frutas)
caixa.adicionar(new Folha('Embalagem', 1,99))

console.log(`Preco total: R$${caixa.obterPreco()}`);
for(i = 0; i < caixa.componentes.length; i++){
    console.log(caixa.componentes[i])
}

