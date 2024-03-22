#Fatec Luigi Papaiz
#DSM - Desenvolvimento de Software Multiplataforma
#Disciplina - Técnicas de Programação II
#Nome: Thiago Messias Santos  23/02/2024
#Descrição: Aplicação do padrão GOF - Criacional - FactoryMethod

#Classe base de veiculos
class Veiculo:
    def _init_(self, modelo):
        self.modelo = modelo
    
    def mostrarDetalhes(self):
        print(f"Modelo: {self.modelo}")

#Subclasses de veiculos
class Carro(Veiculo):
    def __init__(self, modelo):
        super()._init_(modelo)

class Moto(Veiculo):
    def __init__(self, modelo):
        super()._init_(modelo)

#Fabrica abstrata de veiculos
class FabricaDeVeiculos:
    def criarVeiculos(self, modelo):
        raise NotImplementedError("o metodo deve ser implementado pelas subclasses")
    
#Fabrica concreta de carros
class FabricaDeCarros(FabricaDeVeiculos):
    def criarVeiculo(self, modelo):
        return Carro(modelo)
    
#Fabrica concreta de motos
class FabricaDeMotos(FabricaDeVeiculos):
    def criarVeiculo(self, modelo):
        return Moto(modelo)

#uso da fabrica interface
fabricaDeCarros = FabricaDeCarros()
carro = fabricaDeCarros.criarVeiculo("Sedan")
carro.mostrarDetalhes()


fabricaDeMotos = FabricaDeMotos()
moto = fabricaDeMotos.criarVeiculo("kawasaki")
moto.mostrarDetalhes()