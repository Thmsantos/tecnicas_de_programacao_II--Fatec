#Fatec Luigi Papaiz
#DSM - Desenvolvimento de Software Multiplataforma
#Disciplina - Técnicas de Programação II
#Nome: Thiago Messias Santos  15/03/2024
#Descrição: Aplicação do padrão GOF - Criacional - prototype
import copy

#classe pessoa no qual será clonada

class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def __str__(self):
        return f'nome:  {self.nome}, Idade: {self.idade}'
    

    def clone(self):
        return copy.copy(self)
    

#classe gerenciadora (manager)
class pessoaManager:
    def __init__(self):
        self.pessoas = {}

    def adicionaPessoas(self, nome, idade, id):
        pessoa = Pessoa(nome, idade)
        self.pessoas[id] = pessoa;

    def getPessoaById(self, id):
        return self.pessoas[id].clone()
    
#interface para o usuario 

#criando uma instancia de PessoaManager
manager = pessoaManager();

#adicionando pessoa
manager.adicionaPessoa("th", 21, 1)
manager.adicionaPessoa("thi", 22, 2)
manager.adicionaPessoa("thiago", 33, 3)

#clonando pessoa e modificando os dados;
pessoaClone1 = manager.getPessoaById(1)
pessoaClone2 = manager.getPessoaById(2)

pessoaClone1.nome = "th santos"
pessoaClone2.nome = "thi santos"
pessoaClone2.idade = 42

#output das pessoas originais
print('\n pessoas originais \n')
print(manager.getPessoaById(1))
print(manager.getPessoaById(2))
print(manager.getPessoaById(3))


print('\n')

#output clones
print('\n pessoas clonadas \n')
print(pessoaClone1)
print(pessoaClone2)





