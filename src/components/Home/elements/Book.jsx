import {useState} from "react";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../redux/actions/cartActions";

const Book = ({ id, cover_url, title, author, pages, price }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(id, quantity));
    }

    return (
        <article className="home__book" key={id} id={id}>
            <img src={cover_url} className="book__img" alt="bookPhoto"/>
            <div className="book__textBox">
                <h3 className="book__title">{title}</h3>
                <p className="book__author">{author}</p>
                <p className="book__pages">{pages} stron</p>
                <p className="book__price">Cena: {price}zł</p>
                <div className="book__qty">
                    <p>Sztuk:</p>
                    <select
                        value={quantity}
                        onChange={e => setQuantity(parseInt(e.target.value))}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
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