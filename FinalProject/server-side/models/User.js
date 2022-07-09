import mongoose from 'mongoose'

// Criando esquema da coleção de usuários do banco
const userSchema = new mongoose.Schema ({
    userName: {type: String, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    tel: {type: String, default: '99999-9999'}, // Telefone
    email: {type: String, default: 'aaa@usp.br'},
    addr: {type: String, default: 'street X, some district, city, country'}, // Endereço
    admin: {type: Boolean, default: false}
})

// Criando modelo da coleção de usuários
const User = mongoose.model('User', userSchema);

export default User;