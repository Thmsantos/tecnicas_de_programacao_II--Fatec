//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  23/02/2024
//Descrição: Aplicação do padrão GOF - Criacional - FactoryMethod


//Classe base de veiculos
class Veiculo{
    constructor(modelo){
        this.modelo = modelo
    }

    mostrarDetalhes(){
        console.log(`Modelo: ${this.modelo}`)
    }
}

//Subclasses de veiculos

class Carro extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

class Moto extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
} 

//Fabrica abstrata de veiculos
class FabricaDeVeiculos{
    criarVeiculo(modelo){
        throw new Error('o metodo deve ser implementado pelas subclasses')
    }
}

//Fabrica concreta de carros
class FabricaDeCarros extends FabricaDeVeiculos{
    criarVeiculo(modelo){
        return new Carro(modelo)
    }
}

//fabrica concreta de motos
class FabricaDeMotos extends FabricaDeVeiculos{
    criarVeiculo(modelo){
        return new Moto(modelo)
    }
}

//Uso da Fabrica - Interface

const fabricaDeCarros = new FabricaDeCarros();
const carro = fabricaDeCarros.criarVeiculo("Sedan")
carro.mostrarDetalhes();


const fabricaDeMotos = new FabricaDeMotos();
const moto = fabricaDeMotos.criarVeiculo("popzinha")
moto.mostrarDetalhes();