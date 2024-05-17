//Fatec Luigi Papaiz
//DSM - Desenvolvimento de Software Multiplataforma
//Disciplina - Técnicas de Programação II
//Nome: Thiago Messias Santos  17/05/2024
//Descrição: Aplicação do padrão GOF - Comportamenta - chain

//importando lib 
var prompt = require('prompt-sync')();

//classe base
class EtapaProcesso {
    constructor() {
        this.proximaEtapa = null;
    }

    //Define a proxima etapa do processo:

    setProximaEtapa(etapa) {
        this.proximaEtapa = etapa
    }

    //Metodo que cada etapa implementará
    processar() {

    }
}

//Etapa de Conexão
class EtapaConexao extends EtapaProcesso {
    processar() {
        console.log('[01] - CONEXAO: conectando ao sistema de pagamento');

        //simulação da logica

        console.log('[OK] - CONEXAO: Estabelecida com sucesso..');

        if (this.proximaEtapa) {
            this.proximaEtapa.processar();
        }
    }
}

//etapa de validação

class EtapaValidacao extends EtapaProcesso {
    processar() {
        console.log('[02] - VALIDAÇÃO: validando infos')

        //simulação da logica

        console.log('[OK] - VALIDAÇÃO: Informações validadas com sucesso!')

        if (this.proximaEtapa) {
            this.proximaEtapa.processar()
        }
    }
}

//Etapa de Envio de Informação:
class EtapaEnvioInformacao extends EtapaProcesso {
    processar() {
        console.log('[03] - ENVIO DE INFORMAÇÃO: enviando infos')

        //simulação da logica

        console.log('[OK] - ENVIO DE INFORMAÇÃO: envio concluido')

        if (this.proximaEtapa) {
            this.proximaEtapa.processar()
        }
    }
}

//Etapa de autenticação

class EtapaAutenticacao extends EtapaProcesso {
    processar() {
        console.log('[04] - AUTENTICAÇÃO: autenticando...')

        //simulação da logica

        console.log('[OK] - AUTENTICAÇÃO: autenticado')

        if (this.proximaEtapa) {
            this.proximaEtapa.processar()
        }
    }
}

//etapa de confirmação
class EtapaConfirmacao extends EtapaProcesso {
    processar() {
        console.log('[05] - CONFIRMAÇÃO: confirmando compra..')

        //simulação da logica

        console.log('[OK] - CONFIRMAÇÃO: compra confirmada!')


    }
}


//cliente

class Cliente {
    //construtor

    constructor(valorPagamento) {
        this.valorPagamento = valorPagamento;
        this.EtapaProcesso = new EtapaConexao();
        const etapaValidacao = new EtapaValidacao();
        const etapaEnvio = new EtapaEnvioInformacao();
        const etapaAutenticacao = new EtapaAutenticacao();
        const etapaConfirmacao = new EtapaConfirmacao();

        //define a sequencia das etapas

        this.EtapaProcesso.setProximaEtapa(etapaValidacao)
        etapaValidacao.setProximaEtapa(etapaEnvio)
        etapaEnvio.setProximaEtapa(etapaAutenticacao)
        etapaAutenticacao.setProximaEtapa(etapaConfirmacao)
    }


    //inicia pagamanto

    iniciarPagamento() {
        console.log(`[INICIO] INICIANDO PAGAMENTO DE R$ ${this.valorPagamento}`)

        this.EtapaProcesso.processar();
    }
}

//funcao para solicitar o pagamento:
function solicitarValorPagto() {
    let valor = prompt('Valor: ')

    const valorPagamento = parseFloat(valor)

    if (!isNaN(valorPagamento) && valorPagamento > 0) {
        const cliente = new Cliente(valorPagamento);

        cliente.iniciarPagamento();
    } else {
        console.log('[ERRO] valor inválido');
        solicitarValorPagto();
    }
}


//solicita o valor do pagamento:
solicitarValorPagto()
