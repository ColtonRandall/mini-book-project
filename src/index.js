import React from "react";
import ReactDOM from "react-dom";

// import CSS
import "./index.css";

// Stateless functional component
// Components must be capitalised

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81F30JDZU9L._AC_UL604_SR604,400_.jpg",
  title: "Why a Daughter Needs a Dad",
  author: "Gregory E. Lang",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL906_SR906,600_.jpg",
  title: "Atomic Habits",
  author: "James Clear",
};

function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, author, title }) => {
  // const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// Same thing, different syntax
// this will get messay VERY fast

// const Greeting = () => {
//   return React.createElement("h3", {}, "Colton's second component");
// };

ReactDOM.render(<BookList />, document.getElementById("root"));
