import mongoose from 'mongoose'

// Criando esquema da coleção de livros do banco
const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    edition: {type: Number, default: 1},
    publisher: {type: String, required: true},
    description: String,
    genre: [String],
    category: [String],
    img: {type: String, required: true}, // A imagem será uma url
    price: {type: Number, required: true},
    inv_qtd: {type: Number, default: 1}, // Quantidade em estoque
    sold_qtd: {type: Number, default: 0}
})

// Criando modelo da coleção de livros

const Book = mongoose.model('Book', bookSchema);

export default Book;