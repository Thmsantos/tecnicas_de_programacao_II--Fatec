public class Pessoa {
    String tipo;

    public Pessoa(String tipo) {
        this.tipo = tipo;
    }

    public String MostrarTipo() {
        return tipo;
    }

    public String MostrarSaudacao() {
        return "Olá";
    }
}
