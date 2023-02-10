import BookShow from './BookShow';

const BookList = ({ books, onDelete }) => {
  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default BookList;
