//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  12/04/2024
//Descrição: Aplicação do padrão GOF - Estrutural - Composite
//Desafio imposto na sala de criar um sistema da fatec com as seguintes condições:
//criar curso dsm
//incluir turmas 1, 2, 3, 4, 5, 6
//cada turma add 5 alunos
//info ra(4), nome completo(20), nota(p1, p2, p3, p4, media final), status
//adicionar "interface"
//dados do aluno: nome, email, curso e semestre
//dados academico: ra, nome, relação , relação de alunos,notas


//classe componentes
class CaracteristicasAluno{
    obterNome(){}

    obterRa(){}

    obterEmail(){}

    obterCurso(){}

    obterSemestre(){}

    obterStatus(){}

    obterNotas(){}

    obterFaltas(){}
}

//classe folha
class Aluno extends CaracteristicasAluno{
    constructor(nome, notas, ra, email, curso, semestre, status, faltas){
        super();
        this.nome = nome;
        this.notas = notas;
        this.ra = ra;
        this.email = email;
        this.curso = curso;
        this.semestre = semestre;
        this.status = status;
        this.faltas = faltas;
    }

    obterNome(){
        return this.nome;
    }

    obterNotas(){
        return this.notas;
    }

    obterRa(){
        return this.ra;
    }

    obterEmail(){
        return this.email;
    }

    obterCurso(){
        return this.curso;
    }

    obterSemestre(){
        return this.semestre;
    }

    obterStatus(){
        return this.status;
    }

    obterFaltas(){
        return this.faltas;
    }
    
}

//composto
class Turma extends CaracteristicasAluno{
    constructor(nome){
        super();
        this.nome = nome;
        this.arrayAlunos = []
    }

    obterNome(){
        return this.nome;
    }

    obterRa(){
        let arrayRa = [];

        for(let aluno of this.arrayAlunos){
            arrayRa = arrayRa.concat(aluno.obterRa())
        }

        return arrayRa;
    }

    obterSemestre(){
        let arraySemestre = [];

        for(let aluno of this.arrayAlunos){
            arraySemestre = arraySemestre.concat(aluno.obterSemestre())
        }

        return arraySemestre;
    }

    obterEmail(){
        let arrayEmails = [];

        for(let aluno of this.arrayAlunos){
            arrayEmails = arrayEmails.concat(aluno.obterEmail())
        }

        return arrayEmails;
    }

    obterStatus(){
        let arrayStatus = []

        for(let aluno of this.arrayAlunos){
            arrayStatus = arrayStatus.concat(aluno.obterSemestre)
        }

        return arrayStatus;
    }

    obterCurso(){
        let arrayCursos = []
        
        for(let aluno of this.arrayAlunos){
            arrayCursos = arrayCursos.concat(aluno.obterCurso())
        }

        return arrayCursos;
    }

    obterNotas(){
        let arrayNotas = [];

        for(let aluno of this.arrayAlunos){
            arrayNotas = arrayNotas.concat(aluno.obterNotas())
        }

        return arrayNotas;
    }

    obterFaltas(){
        let arrayFaltas = []

        for(let aluno of this.arrayFaltas){
            arrayFaltas = arrayFaltas.concat(aluno.obterFaltas())
        }

        return arrayFaltas;
    }

    obterRelacaoAlunos(){
        return this.arrayAlunos.map(aluno => {
            return{
                nome: aluno.obterNome(),
                notas: aluno.obterNotas(),
                faltas: aluno.obterFaltas(),
                semestre: aluno.obterSemestre(),
                status: aluno.obterStatus(),
                email: aluno.obterEmail(),
                ra: aluno.obterRa(),
                curso: aluno.obterCurso()
            }
        })
    }

    adicionarAluno(aluno){
        this.arrayAlunos.push(aluno)
    }

    removerAluno(aluno){
        const index = this.arrayAlunos.indexOf;
        if(index != -1){
            this.obterRelacaoAlunos.splice(index, 1)
        }
    }
}

//interface de uso

//criando turmas
let turmasInterface = []

for(let i = 0; i < 6; i++){
    turmasInterface[i] = new Turma("Turma" + (i + 1));
}

//criando todos os alunos (5 por turma = 30)
/* nome, notas, ra, email, curso, semestre, status, faltas; */
let alunosInterface = []

for(let i = 0; i < 30; i++){
    alunosInterface[i] = new Aluno(
    "Aluno" + (i + 1), //nome
    [6, 8, 7, 9], //notas
    '21713923110' + (i + 1), //ra
    'aluno' + (i + 1) + '@email.com', //email
    "Desenvolvimento de Software", //curso
    '3º', //semestre
    "cursando", //status
    [0, 2, 4, 2] //faltas
    )
}

//criando alunos e adicionando 5 alunos em cada turma segundo o desafio
let numeradorAlunos = 0 
for(let i = 0; i < turmasInterface.length; i++){
    
    for(let j = numeradorAlunos; j < (numeradorAlunos + 5); j++){
        turmasInterface[i].adicionarAluno(alunosInterface[j])
    }
    
    numeradorAlunos = numeradorAlunos + 5 //count para adicionar todos os 30 alunos
}


//console.log("relação de alunos::")
for(let i = 0; i < turmasInterface.length; i++){
    turmasInterface[i].obterRelacaoAlunos().forEach(aluno => {
        //pegando media final de cada aluno
        let mediaFinal = 0
        for(let b = 0; b < aluno.notas.length; b++){
            mediaFinal = mediaFinal + aluno.notas[b]
        }

        console.log(
            turmasInterface[i].obterNome(), "\n",
            "nome: ", aluno.nome,"\n",
            "email: ", aluno.email, "\n",
            "RA: ", aluno.ra, "\n",
            "Notas: ", aluno.notas, "\n",
            "Media Final: ", (mediaFinal/aluno.notas.length), "\n",
            "Curso: ", aluno.curso, "\n",
            "Semestre: ", aluno.semestre, "\n",
            "Status: ", aluno.status, "\n",
            "Faltas: ", aluno.faltas, "\n",
            "----------------------------------"
        )
    })
    console.log("--------------")
}
