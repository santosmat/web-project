import './App.css';
import NavBar from './Components/NavBar';
import TopBar from './Components/TopBar';
import Footer from './Components/Footer'
import { useEffect, useState } from 'react';
import Book from './Components/Book';
import Card from './Components/Card'

function App() {



  const [bookList, setList] = useState([new Book("Harry Potter e a Pedra Filosofal", "J. K. Rowling", 40, "a", 1, "Primeiro livro da franquia..."), new Book("A Rainha Vermelha - Vol. 1", "Aveyard,Victoria", 44.99, "a", 1, "Primeiro livro da franquia..."), new Book("A Rainha Vermelha - Vol. 2", "Aveyard,Victoria", 44.99, "a", 1, "Segundo livro da franquia..."), new Book("A Rainha Vermelha - Vol. 3", "Aveyard,Victoria", 44.99, "a", 1, "Terceiro livro da franquia...")]);
  const [cart, setCart] = useState([]);


  
  const addBook = (titulo, autores, valor, editora, edicao, descricao) =>
  {
    let book = new Book(titulo, autores, valor, editora, edicao, descricao);
    console.log(book)
    setList([...bookList, book])
    console.log("Criado com sucesso!!")
  }
  
  const deleteBook = (book) =>
  {
    let filteredList = bookList.filter(item => item.id !== book.id)
    setList(filteredList)
  }
  
  const startList = () =>
  {
     addBook("Harry Potter e a Pedra Filosofal", "J. K. Rowling", 40, "a", 1, "Primeiro livro da franquia...")
     addBook("A Rainha Vermelha - Vol. 1", "Aveyard,Victoria", 44.99, "a", 1, "Primeiro livro da franquia...")
     addBook("A Rainha Vermelha - Vol. 2", "Aveyard,Victoria", 44.99, "a", 1, "Segundo livro da franquia...")
     addBook("A Rainha Vermelha - Vol. 3", "Aveyard,Victoria", 44.99, "a", 1, "Terceiro livro da franquia...")
     
  }
  
  return (
    <div className="App">
      <TopBar></TopBar>
      <NavBar></NavBar>
      <div className='container'>
        <ul className='books-container'>
          {bookList.map(book =>
            <li className='book-item'>
              <Card book={book} key={book.id}></Card>
            </li>
          )}  

        </ul>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
