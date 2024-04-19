//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  19/04/2024
//Descrição: Aplicação do padrão GOF - Estrutural - Decorator Desafio

//Interface Componente

class Faculdade {
    constructor() {
        this.descricao = `Curso`
    }

    getDescricao() {
        return this.descricao;
    }

    custo() {
        return 0;
    }
}

//Implementação concreta das Interface Component para cursos personalizados;
class CursoPersonalizado extends Faculdade {
    constructor(curso, periodo, internet, estacionamento, armario) {
        super();
        this.descricao = `\n
                         Curso ${curso} 
                         Periodo ${periodo} 
                         Plano Internet ${internet} 
                         tipo estacionamento ${estacionamento} 
                         Plano Armario ${armario}`
        this.curso = curso;
        this.periodo = periodo;
        this.internet = internet;
        this.estacionamento = estacionamento;
        this.armario = armario;
    }


    custo() {
        let mensalidadeBase = 0;

        //verificando preço da internet
        if (this.internet === "2Gb") {
            mensalidadeBase += 9.90;
        } else if (this.internet === "5Gb") {
            mensalidadeBase += 19.90
        } else if (this.internet === "10Gb") {
            mensalidadeBase += 29.90
        }


        //verificando preço do Estacionamento
        if (this.estacionamento === "Bicicleta") {
            mensalidadeBase += 30.00
        } else if (this.estacionamento === "Moto") {
            mensalidadeBase += 60.00
        } else if (this.estacionamento === "Carro") {
            mensalidadeBase += 120.00
        }

        //verificando preço do armario
        if (this.armario === "Dez_Litros") {
            mensalidadeBase += 6.00
        } else if (this.armario === "Vinte_Litros") {
            mensalidadeBase += 10.00
        } else if (this.armario === "Quarenta_Litros") {
            mensalidadeBase += 15.00
        }

        return mensalidadeBase.toFixed(2)

    }
}

//decorador abstrato
class Decorator extends Faculdade {
    constructor(curso) {
        super(curso);
        this.curso = curso;
    }

    getDescricao() {
        return this.curso.getDescricao();
    }

    custo() {
        return this.curso.custo()
    }
}


//decorador concreto para extras

class EadCincoCursos extends Decorator {
    constructor(curso) {
        super(curso);
    }

    getDescricao() {
        return `${this.curso.getDescricao()}, Ead 5 cursos`
    }

    custo() {
        return (parseFloat(this.curso.custo()) + 9.90).toFixed(2)
    }
}

class EadQuinzeCursos extends Decorator {
    constructor(curso) {
        super(curso);
    }

    getDescricao() {
        return `${this.curso.getDescricao()}, Ead 15 cursos`
    }

    custo() {
        return (parseFloat(this.curso.custo()) + 19.99).toFixed(2)
    }
}

class EadIlimitado extends Decorator {
    constructor(curso) {
        super(curso);
    }

    getDescricao() {
        return `${this.curso.getDescricao()}, Ead ilimitado`
    }

    custo() {
        return (parseFloat(this.curso.custo()) + 24.90).toFixed(2)
    }
}

//uso 
//curso, periodo, internet, estacionamento, armario
let curso = new CursoPersonalizado("ADS", "Manhã", "5Gb", "Bicicleta", "Dez_Litros")
console.log("Descrição:" + curso.getDescricao(), "\n", "Custo: R$: ", curso.custo())


//adicionando ead

curso = new EadIlimitado(curso);
console.log("Descrição:" + curso.getDescricao(), "\n", "Custo: R$: ", curso.custo())