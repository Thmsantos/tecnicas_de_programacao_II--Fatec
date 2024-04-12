#Fatec Luigi Papaiz
#DSM - Desenvolvimento de Software Multiplataforma
#Disciplina - Técnicas de Programação II
#Nome: Thiago Messias Santos  22/03/2024
#Descrição: Aplicação do padrão GOF - Criacional - singleton

#exemplo de aplicação em um e-commerce


#criação do carrinho

class Carrinho:
    instancia = None

    def __new__(cls):
        if not cls.instancia:
            cls.instancia = super().__new__(cls)
            cls.instancia.listaProdutos = []
        return cls.instancia
    
    def adcProduto(self, produto):
        self.listaProdutos.append(produto)

    def obterProduto(self):
        return self.listaProdutos
    
    def limparCarrinho(self):
        self.listaProdutos = []


#---

#intancia dos carrinhos
carrinhoInstancia1 = Carrinho()
carrinhoInstancia2 = Carrinho()

print(carrinhoInstancia1 == carrinhoInstancia2)


#adicionando produtos
carrinhoInstancia1.adcProduto({"id": 9, "nome": "produto x", "preco": "20.00"})
carrinhoInstancia1.adcProduto({"id": 5, "nome": "produto y", "preco": "24.44"})
carrinhoInstancia1.adcProduto({"id": 7, "nome": "produto d", "preco": "28.00"})
carrinhoInstancia1.adcProduto({"id": 15, "nome": "produto g", "preco": "31.00"})

carrinhoInstancia2.adcProduto({"id": 8, "nome": "produto f", "preco": "20.00"})
carrinhoInstancia2.adcProduto({"id": 2, "nome": "produto j", "preco": "33.00"})
carrinhoInstancia2.adcProduto({"id": 6, "nome": "produto a", "preco": "25.00"})
carrinhoInstancia2.adcProduto({"id": 11, "nome": "produto s", "preco": "37.00"})


#apresenta produtos no carrinho
print(carrinhoInstancia1.obterProduto())
print(carrinhoInstancia2.obterProduto())

#limpa carrinho 
carrinhoInstancia1.limparCarrinho()
carrinhoInstancia2.limparCarrinho()


#apresenta produtos no carrinho
print(carrinhoInstancia1.obterProduto())
print(carrinhoInstancia1.obterProduto())



