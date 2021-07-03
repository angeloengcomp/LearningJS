function Constroipessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => `${nome} ${sobrenome}`


    // bloqueia o objeto, ele não pode ser modificado nem adicionado atributos ou metodos somente pode ser acessado
    // funciona também com arrays
    Object.freeze(this)

}