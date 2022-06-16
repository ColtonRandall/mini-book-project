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
      >
        {/* Children props go witihin two Component tags */}
        <p>
          A New York Times bestseller! The perfect Father's Day gift, birthday
          present for dad, Valentine's Day book, or sweet keepsake for a
          daughter of any age!A sweet picture book showcasing all the ways a
          father will help his daughter grow, this is the gift for every girl
          dad and little girl to celebrate their special bond,
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, author, title, children }) => {
  // const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

// Same thing, different syntax
// this will get messay VERY fast

// const Greeting = () => {
//   return React.createElement("h3", {}, "Colton's second component");
// };

ReactDOM.render(<BookList />, document.getElementById("root"));
