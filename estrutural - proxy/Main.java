//Objeto Real

class ServicoReal{
    public void executar(){
        System.out.println("Executando o servico real...");
    }
}


//proxy

class ProxyServico{
    private ServicoReal servicoReal;

    public ProxyServico(){
        this.servicoReal = new ServicoReal();
    }

    public void executar(){
        System.out.println("Antes da execução do servico... ");
        servicoReal.executar();
        System.out.println("Depois da execução do serviço......");
    }
}


//uso do proxy

public class Main{
    public static void main(String[] args){
        ProxyServico proxy = new ProxyServico();
        proxy.executar();
    }
}