const BookShow = ({ book }) => {
  return (
    <div className="book-show">
      <p>{book.id}</p>
      <p>{book.title}</p>
    </div>
  );
};

export default BookShow;
