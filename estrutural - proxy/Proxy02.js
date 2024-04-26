//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  26/04/2024
//Descrição: Aplicação do padrão GOF - Estrutural - Proxy

//class produto real
class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    exibirDetalhes() {
        console.log(`Produto ${this.nome}, Preço ${this.preco.toFixed(2)}`)
    }
}

//proxy class produto
class ProxyProduto {
    constructor(produto) {
        this.produto = produto;
    }

    exibirDetalhes() {
        console.log("aguardando autenticação...");
        this.autenticar();
        this.produto.exibirDetalhes();
    }

    autenticar() {
        console.log("Autenticando user....")
        //implementação da logica para autenticar
        console.log("user autenticado....") //podemos retornar a resposta da autenticação
    }
}

//uso do proxy
const produtoReal = new Produto("Camiseta", 39.90)
const proxyProduto = new ProxyProduto(produtoReal)
proxyProduto.exibirDetalhes()