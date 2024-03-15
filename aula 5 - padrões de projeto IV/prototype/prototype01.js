//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  15/03/2024
//Descrição: Aplicação do padrão GOF - Criacional - prototype

//classe Pessoa que sera o prototipo
class Pessoa {

    constructor(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    //metodo que clona para realizar a copia do objeto

    clone() {
        return new Pessoa(this.id, this.nome, this.idade);
    }

}

//classe pessoaManager que gerencia instancias de pessoas:

class pessoaManager {

    constructor() {
        this.pessoas = {};
    }

    //adiciona nova pessoa (objeto) ao dicionario pessoa:

    adicionaPessoa(id, nome, idade) {
        const pessoa = new Pessoa(id, nome, idade);
        this.pessoas[id] = pessoa;
    }

    //solicita uma pessoa pelo id e retorna uma copia

    getPessoaById(id) {
        const pessoaOriginal = this.pessoas[id];
        if (pessoaOriginal) {
            return pessoaOriginal.clone();
        } else {
            return null;
        }
    }
}

//interface para o usuario 

//criando uma instancia de PessoaManager
const manager = new pessoaManager();

//adicionando pessoa
manager.adicionaPessoa(1, "th", 21);
manager.adicionaPessoa(2, "thi", 22);
manager.adicionaPessoa(3, "thiago", 33);

//clonando pessoa e modificando os dados;
const pessoaClone1 = manager.getPessoaById(1);
if (pessoaClone1) {
    pessoaClone1.nome = "th santos";
}

const pessoaClone2 = manager.getPessoaById(2);
if (pessoaClone2) {
    pessoaClone2.idade = 43;
    pessoaClone2.nome = "crsete";
}

console.log('\n')

//output das pessoas originais
console.log("original: ", manager.getPessoaById(1));
console.log("original: ", manager.getPessoaById(2));
console.log("original: ", manager.getPessoaById(3));

console.log('\n')

//output clones
console.log("clone: ", pessoaClone1);
console.log("clone: ", pessoaClone2);





