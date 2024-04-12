#Fatec Luigi Papaiz
#DSM - Desenvolvimento de Software Multiplataforma
#Disciplina - Técnicas de Programação II
#Nome: Thiago Messias Santos  12/04/2024
#Descrição: Aplicação do padrão GOF - Estrutural - Composite

#classe componentes

class Componente :
    def __init__(self, nome):
        self.nome = nome 

    def adicionar(self):
        pass

    def remover(self):
        pass

    def obterNome(self):
        return self.nome  

#classe folha
class Folha(Componente):

    def __init__(self, nome, preco):
        super().__init__(nome)
        self.preco = preco
    
    def obterPreco(self):
        return self.preco
    
    def obterConteudo(self):
        return f"{self.nome} - R${self.preco:.2f}"
    
#class container

class Container(Componente):

    def __init__(self, nome):
        super().__init__(nome)
        self.arrayComponente = []
    

    def adicionar(self ,componente):
        self.arrayComponente.append(componente)
    

    def remover(self, componente):
        self.arrayComponente.remove(componente)

    def obterPreco(self):
        preco = 0
        for componente in self.arrayComponente:
            preco += componente.obterPreco()
        return preco
    
    def obterConteudo(self):
        conteudo = f'{self.nome}:\n'
        for componente in self.arrayComponente:
            conteudo += f"\t{componente.obterConteudo()}\n"
        return conteudo
    


#interface de uso

maca = Folha('Maçã\t', 8.99)
laranja = Folha('Laranja\t', 3.69)
uva = Folha('Uva\t', 9.98)

frutas = Container('Frutas')
frutas.adicionar(maca)
frutas.adicionar(laranja)
frutas.adicionar(uva)

caixa = Container('Caixa de frutas')
caixa.adicionar(frutas)
caixa.adicionar(Folha('Embalagem', 1.99))

print(frutas.obterConteudo())
print(caixa.obterConteudo())



