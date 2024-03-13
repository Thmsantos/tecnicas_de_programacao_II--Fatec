//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  01/03/2024
//Descrição: Aplicação do padrão GOF - Criacional - Abstract Factory 02


//interface fabrica abstrata
class FabricaAbstrata{
    criarProdutoEletronico(){

    };

    criarProdutoModa(){

    };
}

//fabrica concreta - prod eletronicos
class FabricaEletronico extends FabricaAbstrata{
    criarProdutoEletronico(){
        return new Telefone();
    }

    criarProdutoModa(){
        return new Camiseta();
    }
}

//Fabrica Concreta - prod moda
class FabricaModa extends FabricaAbstrata{
    criarProdutoModa(){
        return new Camiseta();
        return new Chinelo();
    }

    criarProdutoEletronico(){
        return new Telefone();
    }
}

//Classe Abstrata para Eletronicos:
class ProdutoEletronico{
    constructor(){
        this.tipo = "Eletrônico"
    }

    descricao(){
        return `Produto ${this.tipo}: Telefone`;
    }
}

//Classe Abstrata para Moda:
class ProdutoModa{
    constructor(){
        this.tipo = "Moda"
    }

    descricao(){
        return `Produto ${this.tipo}: Camiseta`;
    }
}

//Classe Concreta de Prod eletronicos
class PC extends ProdutoEletronico{
    descricao(){
        return `Produto ${this.tipo}: PC`
    }
}

class Telefone extends ProdutoEletronico{
    descricao(){
        return `Produto ${this.tipo}: Telefone`
    }
}

//Classe Concreta de Prod Moda
class Chinelo extends ProdutoModa{
    descricao(){
        return `Produto ${this.tipo}: Chinelo`
    }
}
class Camiseta extends ProdutoModa{
    descricao(){
        return `Produto ${this.tipo}: Camiseta`
    }
}

//Uso no padrão abstract factory

function lojaVirtual(cliente, fabrica){
    const ProdutoEletronico = fabrica.criarProdutoEletronico();
    const ProdutoModa = fabrica.criarProdutoModa();

    console.log(`${cliente} comprou: `)
    console.log(ProdutoEletronico.descricao())
    console.log(ProdutoModa.descricao())
}



//exemplo de uso com fab de produtos eletronicos

const c1 = "Cliente 1"
const carrinho = new FabricaEletronico()
lojaVirtual(c1, carrinho);


console.log("\n------------\n")

//exemplo de uso com fab de produtos eletronicos

const c2 = "Cliente 2"
const carrinho2 = new FabricaModa()
lojaVirtual(c2, carrinho2);


console.log("\n------------\n")