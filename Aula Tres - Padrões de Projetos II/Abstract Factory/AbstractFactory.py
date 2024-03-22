#Fatec Luigi Papaiz
#DSM - Desenvolvimento de Software Multiplataforma
#Disciplina - Técnicas de Programação II
#Nome: Thiago Messias Santos  01/03/2024
#Descrição: Aplicação do padrão GOF - Criacional - Abstract Factory

#Interface de Fabrica Abstrata
class AbstracrFactory:
    def criarProdutoA(self):
        pass

    def criarProdutoB(self):
        pass

#Fabrica Concreta 1 que cria Produtos do tipo A e B - Opção A
class ConcretaFactory1(AbstracrFactory):
    def criarProdutoA(self):
        return ConcretoProdutoA1()
    
    def criarProdutoB(self):
        return ConcretoProdutoB1()

#Fabrica Concreta 2 que cria Produtos do tipo A e B - Opção B
class ConcretaFactory2(AbstracrFactory):
    def criarProdutoA(self):
        return ConcretoProdutoA2()
    
    def criarProdutoB(self):
        return ConcretoProdutoB2()

#interface dos produtos tipo A:
class AbstractProdutoA:
    def metodoA(self):
        pass
    
#Implementação concreta do Produto do tipo A - Opção A:
class ConcretoProdutoA1(AbstractProdutoA):
    def metodoA(self):
        return "produto A, criado pela fab 1"

#Implementação concreta do Produto do tipo A - Opção B:
class ConcretoProdutoA2(AbstractProdutoA):
    def metodoA(self):
        return "produto A, criado pela fab 2"  

#interface dos produtos tipo B:
class AbstractProdutoB:
    def metodoB(self):
        pass

#Implementação concreta do Produto do tipo B - Opção A:
class ConcretoProdutoB1(AbstractProdutoB):
    def metodoB(self):
        return "produto B, criado pela fab 1"
    
#Implementação concreta do Produto do tipo B - Opção B:
class ConcretoProdutoB2(AbstractProdutoB):
    def metodoB(self):
        return "produto B, criado pela fab 2"
    
#USO CLIENTE
#funcao para demonstrar o padrão abstract factory
def clientCode(factory):
    produtoA = factory.criarProdutoA()
    produtoB = factory.criarProdutoB()

    print(produtoA.metodoA())
    print(produtoB.metodoB())

#uso com a primeira fabrica:
factory1 = ConcretaFactory1()
clientCode(factory1)

#uso com a segunda fabrica:
factory2 = ConcretaFactory2()
clientCode(factory2)
