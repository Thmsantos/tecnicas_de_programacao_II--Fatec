//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  22/03/2024
//Descrição: Aplicação do padrão GOF - Criacional - singleton

//exemplo de aplicação em um e-commerce


//criacao do carrinho:

const Carrinho = (function (){

    let instancia;

    function criaInstancia(){

        let produtos = [];

        function adicionaProduto(produto){
            produtos.push(produto);
        }

        function obterProduto(){
            return produtos;
        }

        function limparCarrinho(){
            produtos = [];
        }

        return{
            adicionaProduto, obterProduto, limparCarrinho
        }

    }

    return{

        obterInstancia: function(){
            if (!instancia) {
                instancia = criaInstancia();
            }

            return instancia;
        }

    }

})();


//cliente

const carrinhoInstancia1 = Carrinho.obterInstancia();
const carrinhoInstancia2 = Carrinho.obterInstancia();

console.log(carrinhoInstancia1 === carrinhoInstancia2);

//inserir produto

carrinhoInstancia1.adicionaProduto({id: 9, nome: "produto x", preco: "20.00"});
carrinhoInstancia1.adicionaProduto({id: 5, nome: "produto y", preco: "24.44"});
carrinhoInstancia1.adicionaProduto({id: 7, nome: "produto d", preco: "28.00"});
carrinhoInstancia1.adicionaProduto({id: 15, nome: "produto g", preco: "31.00"});

carrinhoInstancia2.adicionaProduto({id: 8, nome: "produto f", preco: "20.00"});
carrinhoInstancia2.adicionaProduto({id: 2, nome: "produto j", preco: "33.00"});
carrinhoInstancia2.adicionaProduto({id: 6, nome: "produto a", preco: "25.00"});
carrinhoInstancia2.adicionaProduto({id: 11, nome: "produto s", preco: "37.00"});


//apresenta o carrinho

console.log(carrinhoInstancia1.obterProduto());
console.log(carrinhoInstancia2.obterProduto());

//limpar carinho
carrinhoInstancia1.limparCarrinho();
carrinhoInstancia2.limparCarrinho();

//apresenta os produtos apos a limpeza do carrinho





