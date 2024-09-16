import React from "react";

const BookDetail = (book, onClose, onCartAdd) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
        {
            console.log(book)
            
        }
        <img src={book.cover} alt="" />
      </div>
    </>
  );
};

export default BookDetail;
