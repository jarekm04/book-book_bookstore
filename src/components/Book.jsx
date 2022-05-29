import {useDispatch} from "react-redux";
import {addToCart} from "../redux/actions/cartAction";

const Book = ({ id, cover_url, title, author, pages, price }) => {
    const dispatch = useDispatch();

    const handleCart = () => {
        dispatch(addToCart(id));
        // const elementID = e.target.parentElement.parentElement.id;
        // if (elementID === book.id.toString() && e.target.textContent === "Dodaj do koszyka") {
        //     e.target.textContent = "Usuń z koszyka";
        // } else {
        //     e.target.textContent = "Dodaj do koszyka";
        // }
    }

    return (
        <article className="home__book" key={id} id={id}>
            <img src={cover_url} className="book__img" alt="bookPhoto"/>
            <div className="book__textBox">
                <h3 className="book__title">{title}</h3>
                <p className="book__author">{author}</p>
                <p className="book__pages">{pages} stron</p>
                <p className="book__price">Cena: {price}zł</p>
                <button className="book__add" onClick={handleCart}>Dodaj do koszyka</button>
            </div>
        </article>
    );
};

export default Book;