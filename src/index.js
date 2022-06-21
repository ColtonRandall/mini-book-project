import React from "react";
import ReactDOM from "react-dom";
import { data } from "./books";
import Book from "./Book";

// import CSS
import "./index.css";

// Stateless functional component
// Components must be capitalised
function BookList() {
  return (
    /* Iterating each book to render on page */

    <section className="bookList">
      {data.map((book) => {
        // 'book' prop is equal to book
        // spread operator - to bring in all props coming from books.map(book)
        // Remember to attach a unique id to each object
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
