import {useState} from "react";
import {useDispatch} from "react-redux";
// import {addItem, deleteItem} from "../redux/actions/actions";

const Book = ({books}) => {
    // const dispatch = useDispatch();

    const handleCart = (e, book) => {
        const elementID = e.target.parentElement.parentElement.id;
        if (elementID === book.id.toString() && e.target.textContent === "Dodaj do koszyka") {
            // dispatch(addItem(book))
            e.target.textContent = "Usuń z koszyka";
        } else {
            // dispatch(deleteItem(book))
            e.target.textContent = "Dodaj do koszyka";
        }
    }

    return (
        <>
            {books.map((book) => (
            <article className="home__book" key={book.id} id={book.id}>
                <img src={book.cover_url} className="book__img" alt="bookPhoto"/>
                <div className="book__textBox">
                    <h3 className="book__title">{book.title}</h3>
                    <p className="book__author">{book.author}</p>
                    <p className="book__pages">{book.pages} stron</p>
                    <p className="book__price">Cena: {book.price}zł</p>
                    <button onClick={(e) => handleCart(e, book)} className="book__add">Dodaj do koszyka</button>
                </div>
            </article>
            ))}
        </>
    );
};

export default Book;