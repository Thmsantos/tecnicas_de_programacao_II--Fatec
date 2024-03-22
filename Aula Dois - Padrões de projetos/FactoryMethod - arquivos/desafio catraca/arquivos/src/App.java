public class App {
    public static void main(String[] args) throws Exception {
        Professor Professor = new Professor("Professor");
        Aluno Aluno = new Aluno("Aluno");
        Funcionario Funcionario = new Funcionario("Funcionária");

        System.out.println(Professor.MostrarSaudacao() + ", " + Professor.MostrarTipo() + " " + Professor.MostrarNome());
        System.out.println(Aluno.MostrarSaudacao() + ", " + Aluno.MostrarTipo() + " " + Aluno.MostrarNome());
        System.out.println(Funcionario.MostrarSaudacao() + ", " + Funcionario.MostrarTipo() + " " + Funcionario.MostrarNome());
    }
}
