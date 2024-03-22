#Fatec Luigi Papaiz
#DSM - Desenvolvimento de Software Multiplataforma
#Disciplina - Técnicas de Programação II
#Nome: Thiago Messias Santos  22/03/2024
#Descrição: Aplicação do padrão GOF - Criacional - singleton

#codigo do livro

class Singleton:
    instance = None

    def __new__(cls):
        if cls.instance is None:
            cls.instance = super().__new__(cls)
            cls.instance.value = 0
        return cls.instance
    
    def increment(self):
        self.value += 1
        print(f"Value: {self.value}")


#cliente
        
s1 = Singleton()
s2 = Singleton()

print(s1 == s2)

s1.increment()
s2.increment()

