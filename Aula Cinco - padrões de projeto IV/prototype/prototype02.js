// ****************************************************************************
// FATEC Diadema - Luigi Papaiz
// Curso: Desenvolvimento de Sistema Multiplataformas - DSM
// Disciplina: Tecnica de Programação II
// Autor: thiago messias       Data: 15/03/2024
// Descrição: Aplicação do padrão GoF - Criacional - Prototype
// ---------------------------------------------------------------------------

// Classe Pizza que representa um tipo de Pizza:
class Pizza {
    constructor(sabor, preco) {
        this.sabor = sabor;
        this.preco = preco;
    }

    // Método Clone que realiza uma copia do objeto:
    clone() {
        return new Pizza(this.sabor, this.preco);
    }
}

// Classe PedidoPizza representando um pedido de pizza:
class PedidoPizza {
    constructor(cliente, pizzas) {
        this.cliente = cliente;
        this.pizzas = pizzas;
    }

    calcularTotal() {
        let total = 0;
        this.pizzas.forEach(pizza => {
            total += pizza.preco;
        });
        return total;
    }
}

// Classe Pizzaria
class Pizzaria {
    constructor(nome) {
        this.nome = nome;
        this.cardapio = {};
    };

    adicionarPizza(sabor, preco) {
        this.cardapio[sabor] = new Pizza(sabor, preco);
    };

    fazerPedido(cliente, sabores) {
        const pizzas = [];

        sabores.forEach(sabor => {
            if (this.cardapio.hasOwnProperty(sabor)) {
                pizzas.push(this.cardapio[sabor].clone());
            } else {
                console.log(`Desculpe, ${this.nome} não temos a pizza de ${sabor}.`);
            };
        });

        if (pizzas.length > 0) {
            const pedido = new PedidoPizza(cliente, pizzas);
            console.log(`Pedido recebido de ${cliente}:`);
            pedido.pizzas.forEach(pizza => {
                console.log(`${pizza.sabor} - R$ ${pizza.preco.toFixed(2)}`);
            });
            console.log(`Total: R$${pedido.calcularTotal().toFixed(2)}`);
        };
    };
};

// USO DA PIZZARIA EM PROTOTYPE: #################################################
const minhaPizzaria = new Pizzaria("Pizzaria da FATEC: ");

minhaPizzaria.adicionarPizza("Mussarela", 30.00);
minhaPizzaria.adicionarPizza("Calabresa", 35.00);
minhaPizzaria.adicionarPizza("Portuguesa", 40.00);

minhaPizzaria.fazerPedido("João", ["Mussarela", "Calabresa"]);
minhaPizzaria.fazerPedido("Maria", ["Mussarela", "Frango"]);