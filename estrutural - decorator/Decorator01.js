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
        this.descricao = `Pizza ${sabor} Tamanho ${sabor} com borda ${sabor}`;
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

    custo(){
        return (parseFloat(this.pizza.custo()) + 1.00).toFixed(2)
    }

}

//uso 

let pizza = new PizzaPersonalizada('Calabresa', 'Grande', 'Recheada');
console.log("Descrição: " + pizza.getDescricao() + ", Custo: R$: ", pizza.custo());

//adicionando queijo
pizza = new QueijoExtra(pizza);
console.log("Descrição: " + pizza.getDescricao() + ", Custo: R$: ", pizza.custo())

//adicionando bacon
pizza = new Bacon(pizza);
console.log("Descrição: " + pizza.getDescricao() + ", Custo: R$: ", pizza.custo())