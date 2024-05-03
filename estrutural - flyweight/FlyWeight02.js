//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  03/05/2024
//Descrição: Aplicação do padrão GOF - Estrutural - FlyWeight

//fabrica
class FabricarFlyweight {
    constructor() {
        this.flyweights = {};
    }

    getFlyweight(codigo) {
        if (!this.flyweights[codigo]) {
            this.flyweights[codigo] = new ProdutoFlyweight(codigo);
        }

        return this.flyweights[codigo];
    }
}

//flyweight

class ProdutoFlyweight {
    constructor(codigo) {
        this.codigo = codigo;
    }

    exibirDetalhes(nome, preco) {
        console.log(`id: ${this.codigo}, nome: ${nome}, preço: ${preco.toFixed(2)}`)
    }
}

//cliente

class Cliente {
    constructor() {
        this.fabricarFlyweight = new FabricarFlyweight();
        this.pedido = [];
    }

    addProduto(codigo, nome, preco) {
        const flyweight = this.fabricarFlyweight.getFlyweight(codigo)
        this.pedido.push({ flyweight, nome, preco });
    }

    exibirPedido() {
        console.log("Pedidos: ")
        this.pedido.forEach(item => {
            item.flyweight.exibirDetalhes(item.nome, item.preco);
        })

    }
}

//uso do projeto 
const cliente = new Cliente();
cliente.addProduto('001', 'camisa', 20.00)
cliente.addProduto('002', 'tenis', 30.00)
cliente.exibirPedido();
