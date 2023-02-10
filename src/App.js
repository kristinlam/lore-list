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

  return (
    <div>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} />
    </div>
  );
};

export default App;
