import {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AiFillCloseCircle, AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/ai";

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => parseInt(item.quantity) + qty, 0);
    }

    console.log(sidebar)

    return (
        <>
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
                    <nav className="header__purchase desktop">
                        <p className="purchase__quantity">
                            Sztuk: {getCartCount()}
                        </p>
                        <Link to="/koszyk">
                            <AiOutlineShoppingCart className="purchase__icon"/>
                        </Link>
                    </nav>

                    <nav className="header__purchase mobile">
                        {sidebar ? (
                            <AiFillCloseCircle
                                className="mobile__openIcon"
                                onClick={() => setSidebar(!sidebar)}
                            />
                        ) : (
                            <AiOutlineMenu
                                className="mobile__openIcon"
                                onClick={() => setSidebar(!sidebar)}
                            />
                        )}
                        <div
                            className={sidebar ? "mobile__menu active" : "mobile__menu"}
                        >
                            <p className="purchase__quantity">
                                Sztuk: {getCartCount()}
                            </p>
                            <Link to="/koszyk">
                                <AiOutlineShoppingCart className="purchase__icon"/>
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;