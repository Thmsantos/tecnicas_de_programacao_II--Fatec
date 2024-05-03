//Objeto real
//teste vscode dev

class ServicoReal{
    executar(){
        console.log("servico real executando...")
    }
}


//proxy

class ProxyServico{
    constructor(){
        this.servicoReal = new ServicoReal();
    }

    executar(){
        console.log("Antes de executar o servico ...")
        this.servicoReal.executar();
        console.log("Depois de executar o servico..")
    }
}


//uso do proxy

const proxy = new ProxyServico();

proxy.executar();