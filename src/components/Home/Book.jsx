import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../redux/actions/cartActions";
import {useEffect, useState} from "react";

const Book = ({id, cover_url, title, author, pages, price}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;


    const handleAddToCart = (e) => {
        const target = e.target;
        dispatch(addToCart(id))
        checkIfAdded(target)
    }

    const checkIfAdded = (target) => {
        console.log(id);
        console.log(target);
        target.classList.add("added");
        cartItems.map(item =>
            item.id === target.parentElement.parentElement.id ? console.log("elo") : null
        )
    }

    return (
        <article className="home__book" key={id} id={id}>
            <img src={cover_url} className="book__img" alt="bookPhoto"/>
            <div className="book__textBox">
                <h3 className="book__title">{title}</h3>
                <p className="book__author">{author}</p>
                <p className="book__pages">{pages} stron</p>
                <p className="book__price">Cena: {price}zł</p>
                <button
                    className="book__add"
                    onClick={handleAddToCart}
                >
                    Dodaj do koszyka
                </button>
            </div>
        </article>
    );
};

export default Book;