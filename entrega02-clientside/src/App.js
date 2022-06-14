import './App.css';
import NavBar from './Components/NavBar';
import TopBar from './Components/TopBar';
import Footer from './Components/Footer'
import { useEffect, useState } from 'react';
import Book from './Components/Book';
import Card from './Components/Card'
import Home from './Components/Home'
import BookInfo from './Components/BookPage'

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BookPage from './Components/BookPage';
import CartPage from './Components/CartPage';

function App() {



  const [bookList, setList] = useState([new Book("Harry Potter e a Pedra Filosofal", "J. K. Rowling", 40.00, "a", 1, "Primeiro livro da franquia..."), new Book("A Rainha Vermelha - Vol. 1", "Aveyard,Victoria", 44.99, "a", 1, "Primeiro livro da franquia..."), new Book("A Rainha Vermelha - Vol. 2", "Aveyard,Victoria", 44.99, "a", 1, "Segundo livro da franquia..."), new Book("A Rainha Vermelha - Vol. 3", "Aveyard,Victoria", 44.99, "a", 1, "Terceiro livro da franquia...")]);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  }

  const clearCart = () =>{
    setCart([]);
  }

  const deleteItem = (item) =>
  {
    let filteredCart = cart.filter(i => i.id !== item.id)
    setCart(filteredCart);
  }


  
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
     addBook("Harry Potter e a Pedra Filosofal", "J. K. Rowling", 40.00, "a", 1, "Primeiro livro da franquia...")
     addBook("A Rainha Vermelha - Vol. 1", "Aveyard,Victoria", 44.99, "a", 1, "Primeiro livro da franquia...")
     addBook("A Rainha Vermelha - Vol. 2", "Aveyard,Victoria", 44.99, "a", 1, "Segundo livro da franquia...")
     addBook("A Rainha Vermelha - Vol. 3", "Aveyard,Victoria", 44.99, "a", 1, "Terceiro livro da franquia...")
     
  }
  
  return (
    <Router>

        <div className="App">
          <TopBar></TopBar>
          <NavBar></NavBar>

          <Routes>
            <Route path='/bookpage/:id' element={<BookPage bookList={bookList} addItem={addItem}/>} />
            <Route path='/cart' element={<CartPage cart={cart} deleteItem={deleteItem} clearCart={clearCart}/>} />
            <Route exact path="/" element={<Home bookList={bookList}/>} />
            <Route path="*" element={
              <div> Caminho nao existe</div>
            } />
         </Routes>
            
          

              
          <Footer></Footer>
        </div>
    </Router>
  );
}

export default App;
