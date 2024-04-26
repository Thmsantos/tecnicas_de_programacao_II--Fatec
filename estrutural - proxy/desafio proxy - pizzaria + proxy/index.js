//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  19/04/2024
//Descrição: Aplicação do padrão GOF - Estrutural - Decorator

//Interface Componente

class Pizza {
    constructor() {
        this.descricao = 'Pizza'; //Descrição padrão pizza
    }

    getDescricao() {
        return this.descricao;
    }

    custo() {
        return 0;
    }
}

//Implementação concreta das Interface Component para pizzas personalizadas;

class PizzaPersonalizada extends Pizza {
    constructor(sabor, tamanho, borda) {
        super();
        this.descricao = `Pizza ${sabor} Tamanho ${tamanho} com borda ${borda}`;
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.borda = borda;
    }

    custo() {
        let precoBase = 0;
        if (this.tamanho === 'Pequena') {
            precoBase = 15.00
        } else if (this.tamanho === "Media") {
            precoBase = 20.00
        } else if (this.tamanho === "Grande") {
            precoBase = 25.00
        }
        return precoBase.toFixed(2)
    }
}

//decorador abstrato

class Decorator extends Pizza {
    constructor(pizza) {
        super();
        this.pizza = pizza;
    }

    getDescricao() {
        return this.pizza.getDescricao();
    }

    custo() {
        return this.pizza.custo();
    }
}


//decorador concreto para adc ingredientes

class QueijoExtra extends Decorator {
    constructor(pizza) {
        super(pizza);
    }

    getDescricao() {
        return `${this.pizza.getDescricao()}, Queijo Extra`
    }

    custo() {
        return (parseFloat(this.pizza.custo()) + 2.00).toFixed(2)
    }
}


class Bacon extends Decorator {
    constructor(pizza) {
        super(pizza);
    }

    getDescricao() {
        return `${this.pizza.getDescricao()}, Bacon extra`
    }

    custo() {
        return (parseFloat(this.pizza.custo()) + 1.00).toFixed(2)
    }

}

//uso com index.html

function montarPizza() {

    let saborSelecionado = document.querySelector('input[name="sabor"]:checked')
    let TamanhoSelecionado = document.querySelector('input[name="Tamanho"]:checked')
    let bordaSelecionada = document.querySelector('input[name="borda"]:checked')


    class ServicoReal {
        executar() {
            if (saborSelecionado != null && TamanhoSelecionado != null && bordaSelecionada != null) {
                let pizza = new PizzaPersonalizada(saborSelecionado.value, TamanhoSelecionado.value, bordaSelecionada.value);

                let custoTotal = parseFloat(pizza.custo())

                //queijo extra - verifica se foi selecionado
                let queijoExtraCheckbox = document.querySelector('input[name="queijo-extra"]:checked')
                if (queijoExtraCheckbox) {
                    custoTotal += parseFloat(queijoExtraCheckbox.getAttribute('data-preco'))
                }

                //bacon extra - verifica se foi selecionado
                let baconExtraCheckbox = document.querySelector('input[name="bacon-extra"]:checked')
                if (baconExtraCheckbox) {
                    custoTotal += parseFloat(baconExtraCheckbox.getAttribute('data-preco'))
                }


                console.log("Descrição: " + pizza.getDescricao() + ", Custo: R$: ", custoTotal.toFixed(2));

                let tagCustoHtml = document.getElementById("total-pedido")
                let tagDescHtml = document.getElementById("descricao_pedido")

                tagCustoHtml.textContent = pizza.custo()
                tagDescHtml.textContent = pizza.getDescricao()
            }else{
                console.log("selecione as características!!")
            }
        }
    }


    class ProxyServico {
        constructor() {
            this.servicoReal = new ServicoReal();
        }

        executar() {
            console.log("Antes de executar o servico ...")
            this.servicoReal.executar();
            console.log("Depois de executar o servico..")
        }
    }

    const proxy = new ProxyServico();

    proxy.executar();

}


