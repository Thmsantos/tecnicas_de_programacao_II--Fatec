#Objeto Real

class ServicoReal:
    def executar(self):
        print("executando servico real....")
        

#proxy

class ProxyServico:
    def __init__(self):
        self.servicoReal = ServicoReal()
        
    def executar(self):
        print("Antes da execução do servico....")
        self.servicoReal.executar()
        print("Depois da execução do servico..")
        

#uso do proxy

proxy = ProxyServico()
proxy.executar() 