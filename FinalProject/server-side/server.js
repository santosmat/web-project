import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import dotenv from 'dotenv'

import bookRoute  from './routes/bookRoute.js'
import userRoute from './routes/userRoute.js'

const PORT = 3000;

const app = express();
dotenv.config();






// Conectando com o banco
mongoose.connect('mongodb+srv://Trab:web123@cluster0.8j71s.mongodb.net/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology : true
});

// Variavel para realizar ações com o banco
let db = mongoose.connection;


// Verificando conexao inicial com o banco
db.on("error", () => {console.log("Erro na conexão do banco")});
db.once("open", () => {console.log("Conectado no banco")}); 





app.use('/', bookRoute);
app.use('/', userRoute);




if(process.env.NODE_ENV != 'development') // Apenas para quando terminarmos o desenvolvimento do projeto
{
    // Fazendo o node fornecer arquivos após o build do react
    app.use(express.static(path.join(__dirname,'../client-side/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client-side/build/index.html'), function(error){
            if(error){
                res.status(500).send(error)
            }
        })
    })
}


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})
