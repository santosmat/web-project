class Book
{
    static lastId = 0;

    constructor(titulo, autores, valor, editora, edicao, descricao) // Pensar em estoque e quantidade de livros vendidos.
    {
        this.id = Book.lastId++;
        this.titulo = titulo;
        this.valor = valor;
        this.autores = autores;
        this.editora = editora;
        this.edicao = edicao;
        this.descricao = descricao;
    }
}

export default Book;