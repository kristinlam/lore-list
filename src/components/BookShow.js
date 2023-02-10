const BookShow = ({ book, onDelete }) => {
  const handleClick = (event) => {
    onDelete(book.id);
  };
  return (
    <div className="book-show">
      <p>{book.title}</p>
      <div className="actions">
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
