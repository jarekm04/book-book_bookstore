import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart, resetCart} from "../../redux/actions/cartActions";
import CartItem from "./elements/CartItem";

const ShoppingCart = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const qtyChangeHandler = (id, quantity) => {
        dispatch(addToCart(id, quantity));
    }

    const getCartPrice = () => {
        return cartItems.reduce((price, item) => (item.price * item.quantity) + price, 0);
    }

    const removeCartItem = (id) => {
        dispatch(removeFromCart(id))
    };

    const handleResetCart = () => {
        dispatch(resetCart());
    }

    return (
        <section className="shoppingCart">
            <div className="container">
                <section className="shoppingCart__products">
                    <div className="shoppingCart__headline">
                        <h2 className="shoppingCart__title">
                            Koszyk
                        </h2>
                        <button
                            className="shoppingCart__resetBtn"
                            onClick={() => handleResetCart()}
                        >
                            Wyczyść koszyk
                        </button>
                    </div>
                    <ul className="products__list">
                        {cartItems.length === 0 ? (
                            <div className="products__empty">
                                <p>Twój koszyk jest pusty.</p>
                                <Link to="/">Wróć do strony głównej.</Link>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    qtyChangeHandler={qtyChangeHandler}
                                    removeCartItem={removeCartItem}
                                />
                            ))
                        )}
                    </ul>
                </section>
                <section className="shoppingCart__summary">
                    <p className="summary__title">
                        Razem do zapłaty:
                    </p>
                    <p className="summary__price">
                        {getCartPrice()}zł
                    </p>
                    <hr/>
                    <Link to="/zamowienie" className="summary__btn">
                        Kup teraz
                    </Link>
                </section>
            </div>
        </section>
    );
};

export default ShoppingCart;