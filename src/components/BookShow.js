import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = (event) => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  const handleDeleteClick = (event) => {
    onDelete(book.id);
  };
  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>
        {showEdit ? (
          <BookEdit book={book} onSubmit={handleSubmit} />
        ) : (
          <h3>{book.title}</h3>
        )}
      </div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
