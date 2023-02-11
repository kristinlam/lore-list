import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
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
