import React from "react";
import ReactDOM from "react-dom";

// import CSS
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81F30JDZU9L._AC_UL604_SR604,400_.jpg",
    title: "Why a Daughter Needs a Dad",
    author: "Gregory E. Lang",
  },

  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL906_SR906,600_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
  },
];

// Stateless functional component
// Components must be capitalised
function BookList() {
  return (
    /* Iterating each book to render on page */

    <section className="bookList">
      {books.map((book) => {
        // 'book' prop is equal to book
        // spread operator - to bring in all props coming from books.map(book)
        // Remember to attach a unique id to each object
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
