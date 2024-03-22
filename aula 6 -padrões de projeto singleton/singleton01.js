//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  22/03/2024
//Descrição: Aplicação do padrão GOF - Criacional - singleton

//codigo do livro

class Singleton{

    constructor(){
        if(Singleton.instance == null){
            Singleton.instance = this;
            this.value = 0;
        }
        return Singleton.instance;
    }

    increment(){
        this.value += 1;
        console.log(`Value: ${this.value}`);

    }

}


//cliente:

const s1 = new Singleton();
const s2 = new Singleton();

console.log(s1 === s2);

s1.increment();
s2.increment();


