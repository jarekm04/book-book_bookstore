import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AiOutlineShoppingCart} from "react-icons/ai";

const Header = () => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.length;
    }

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="header__logo">
                    <p className="logo__textTop">
                        Book-Book
                    </p>
                    <p className="logo__textBottom">
                        Who's there?
                    </p>
                </Link>
                <div className="header__purchase">
                    <p className="purchase__quantity">
                        Sztuk: {getCartCount()}
                    </p>
                    <Link to="/koszyk">
                        <AiOutlineShoppingCart className="purchase__icon"/>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;