//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  01/03/2024
//Descrição: Aplicação do padrão GOF - Criacional - Abstract Factory

//Interface de Fabrica Abstrata
class AbstractFatory{
    criaProdutoA(){

    };

    criaProdutoB(){

    };
}

//Fabrica Concreta 1 que cria Produtos do tipo A e B - Opção A
class ConcretaFactory1 extends AbstractFatory{
    criaProdutoA(){
        return new ConcretoProdutoA1();
    }

    criaProdutoB(){
        return new ConcretoProdutoB1();
    }
}

//Fabrica Concreta 2 que cria Produtos do tipo A e B - Opção B
class ConcretaFactory2 extends AbstractFatory{
    criaProdutoA(){
        return new ConcretoProdutoA2();
    }

    criaProdutoB(){
        return new ConcretoProdutoB2();
    }
}


//interface dos produtos tipo A:
class AbstractProdutoA{
    metodoA(){

    };
}

//Implementação concreta do Produto do tipo A - Opção A:
class ConcretoProdutoA1 extends AbstractProdutoA{
    metodoA(){
        return "Produto tipo A, criado pela fab 1"
    }
}

//Implementação concreta do Produto do tipo A - Opção B:
class ConcretoProdutoA2 extends AbstractProdutoA{
    metodoA(){
        return "Produto tipo A, criado pela fab 2"
    }
}

//interface dos produtos tipo B:
class AbstractProdutoB{
    metodoB(){

    }
}
//Implementação concreta do Produto do tipo B - Opção A:
class ConcretoProdutoB1 extends AbstractProdutoB{
    metodoB(){
        return "Produto tipo B, criado pela fab 1"
    }
}

//Implementação concreta do Produto do tipo B - Opção B:
class ConcretoProdutoB2 extends AbstractProdutoB{
    metodoB(){
        return "Produto tipo B, criado pela fab 2"
    }
}

//USO CLIENTE
function clienteCod(factory){
    const produtA = factory.criaProdutoA();
    const produtoB = factory.criaProdutoB();

    console.log(produtA.metodoA())
    console.log(produtoB.metodoB())
}


//uso com a primeira fabrica:
const factory1 = new ConcretaFactory1();
clienteCod(factory1);


//uso com a segunda fabrica:
const factory2 = new ConcretaFactory2();
clienteCod(factory2);