//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  03/05/2024
//Descrição: Aplicação do padrão GOF - Estrutural - FlyWeight

class FlyWeightFactory {
    constructor() {
        this.flyweights = {};
    }

    getFlyweight(key) {
        if (!this.flyweights[key]) {
            this.flyweights[key] = new Flyweight(key)
        }

        return this.flyweights[key]
    }
}

class Flyweight {
    constructor(intrinsicState) {
        this.intrinsicState = intrinsicState
    }

    operation(extrinsicState) {
        console.log(`Intrinsic: ${this.intrinsicState} , Extrinsic: ${extrinsicState}`)
    }
}

//cliente


class Client {
    constructor() {
        this.flyWeightFactory = new FlyWeightFactory();
    }

    run() {
        const FlyweightA = this.flyWeightFactory.getFlyweight('A')
        const FlyweightB = this.flyWeightFactory.getFlyweight('B')


        FlyweightA.operation('State 1')
        console.log(this.flyWeightFactory, this.flyWeightFactory.getFlyweight('z'))
    }
}

//uso

const clienteUso = new Client();
clienteUso.run();