//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  12/04/2024
//Descrição: Aplicação do padrão GOF - Estrutural - Composite

//classe componentes
class ComponenteAluno{
    
    obterNome(){

    }

    obterNotas(){

    }

    obterFaltas(){

    }
}

//classe folha

class Aluno extends ComponenteAluno{
    constructor(nome, notas, faltas){
        super();
        this.nome = nome;
        this.notas = notas;
        this.faltas = faltas;
    }


    obterNome(){
        return this.nome
    }

    obterNotas(){
        return this.notas;
    }

    obterFaltas(){
        return this.faltas
    }
}

//composto
class Turma extends ComponenteAluno{
    constructor(nome){
        super();
        this.nome = nome;
        this.listaAluno = []
    }

    obterNome(){
        return this.nome
    }

    obterNotas(){
        let listaNota = []

        for(let aluno of this.listaAluno){
            listaNota = listaNota.concat(aluno.obterNotas())
        }

        return listaNota;

    }

    obterFaltas(){
        let listaFalta = []

        for(let aluno of this.listaAluno){
            listaFalta = listaFalta.concat(aluno.obterFaltas())
        }
        
        return listaFalta;
    }

    obterRelacaoAlunos(){
        return this.listaAluno.map(aluno => {
            return{
                nome: aluno.obterNome(),
                notas: aluno.obterNotas(),
                faltas: aluno.obterFaltas()
            }
        })
    }

    adicionarAluno(aluno){
        this.listaAluno.push(aluno)
    }

    removerAluno(aluno){
        const index = this.listaAluno.indexOf;
        if(index != -1){
            this.obterRelacaoAlunos.splice(index, 1);
        }
    }
}

//interface de uso

const aluno1 = new Aluno("thiago", [7, 5, 4, 3], [0, 2, 4, 2]);
const aluno2 = new Aluno("karlos", [8, 6, 4, 2], [0, 1, 4, 2]);

const turmaDaMonica = new Turma("Mônica gang");
turmaDaMonica.adicionarAluno(aluno1)
turmaDaMonica.adicionarAluno(aluno2)

console.log("notas da" , turmaDaMonica.obterNome() + " : " + turmaDaMonica.obterNotas())
console.log("faltas da ", turmaDaMonica.obterNome() + " : " + turmaDaMonica.obterFaltas())

console.log("relação de alunos: ")
turmaDaMonica.obterRelacaoAlunos().forEach(aluno => {
    console.log("nome:", aluno.nome, " - notas", aluno.notas, "- faltas", aluno.faltas)
})

