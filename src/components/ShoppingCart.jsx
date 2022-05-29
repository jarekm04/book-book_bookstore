import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import CartItem from "./CartItem";

const ShoppingCart = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    return (
        <section className="shoppingCart">
            <div className="container">
                <section className="shoppingCart__products">
                    <h2 className="shoppingCart__title">Koszyk</h2>
                    <ul className="products__list">
                        {cartItems.length === 0 ? (
                            <div>
                                Twój koszyk jest pusty. <Link to ="/">Wróć</Link>
                            </div>
                        ) : (
                            cartItems.map(item => (
                                <CartItem id={item.id} item={item} />
                            ))
                        )}
                    </ul>
                </section>
                <section className="shoppingCart__summary">
                    <p className="summary__title">Razem do zapłaty:</p>
                    <p className="summary__price">2004zł</p>
                    <hr/>
                    <Link to="/zamowienie" className="summary__btn">Kup teraz</Link>
                </section>
            </div>
        </section>
    );
};

export default ShoppingCart;