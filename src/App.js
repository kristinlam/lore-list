import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', { title });
    setBooks([...books, response.data]);
  };

  const deleteBookById = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedArray = books.map((book) => {
      if (book.id === id) return { ...book, title: newTitle };
      else return book;
    });
    setBooks(updatedArray);
  };

  return (
    <div className="app">
      <h1>Lore List</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
};

export default App;
