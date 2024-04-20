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
        this.descricao = `Curso: ${curso} 
                         , Periodo: ${periodo} 
                         , Plano Internet: ${internet} 
                         , tipo estacionamento: ${estacionamento} 
                         , Plano Armario: ${armario}`
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

//uso web

function juntarCaracteristicasCurso() {
    let cursoEscolhido = document.querySelector('input[name="curso"]:checked')
    let periodoEscolhido = document.querySelector('input[name="periodo"]:checked')
    let internetEscolhida = document.querySelector('input[name="internet"]:checked')
    let estacionamentoEscolhido = document.querySelector('input[name="estacionamento"]:checked')
    let armarioEscolhido = document.querySelector('input[name="armario"]:checked')
    let EadExtra = document.querySelector('input[name="EadCursos"]:checked')

    let curso = new CursoPersonalizado(
        cursoEscolhido.value, periodoEscolhido.value, internetEscolhida.value, estacionamentoEscolhido.value, armarioEscolhido.value
    )

    console.log("Descrição: ", curso.getDescricao())
    console.log('Custo: ', curso.custo())


    if (EadExtra.value != null) {

        if (EadExtra.value === "EadCincoCursos") {
            console.log('\n', "EXTRA ADICIONADO")
            curso = new EadCincoCursos(curso);
            console.log("Descrição: ", curso.getDescricao())
            console.log('Custo: ', curso.custo())

        } else if (EadExtra.value === "EadQuinzeCursos") {
            console.log('\n', 'EXTRA ADICIONADO')
            curso = new EadQuinzeCursos(curso);
            console.log("Descrição: ", curso.getDescricao())
            console.log('Custo: ', curso.custo())

        } else if (EadExtra.value === "EadIlimitado") {
            console.log('\n', 'EXTRA ADICIONADO')
            curso = new EadIlimitado(curso);
            console.log("Descrição: ", curso.getDescricao())
            console.log('Custo: ', curso.custo())

        }
    }

    let tagCustoHtml = document.getElementById("custo_total");
    let tagDescricaoHtml = document.getElementById("descricao_curso")

    tagCustoHtml.textContent = curso.custo();
    tagDescricaoHtml.textContent = curso.getDescricao();

}
