import React from "react";

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => alert("Purchase book?")}>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
