import React, { useEffect } from "react";
import { connect } from "react-redux";
import { booksLoaded } from "../../redux";
import { bookAddedToCart } from "../../redux/actions";


import BookListItem from "../book-list-item";
import { WithService } from "../hoc-helpers";
import cls from './styles.module.scss'
import LoaderIndicator from "../loaderindcator";

const BookList = ({ books, booksLoaded, service, addBook }) => {
  useEffect(() => {
    service.getBooks().then((data) => booksLoaded(data));
  }, []);

  if (books.length === 0) {
    return (
      <div className={cls.loadingContainer}>
        <LoaderIndicator />
      </div>
    );
  }
  return (
    <ul>
      {books.map((el) => {
        return (
          <li key={`book-${el.id}`}>
            <BookListItem addBook={addBook} book={el} />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => dispatch(booksLoaded(newBooks)),
    addBook: (bookid) => dispatch(bookAddedToCart(bookid)),
  };
};

export default WithService(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
