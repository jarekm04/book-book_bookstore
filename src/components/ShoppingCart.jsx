import {RiDeleteBin7Fill} from "react-icons/ri";
import {Link} from "react-router-dom";

const ShoppingCart = () => {
    return (
        <section className="shoppingCart">
            <div className="container">
                <section className="shoppingCart__products">
                    <h2 className="shoppingCart__title">Koszyk</h2>
                    <ul className="products__list">
                        <li className="products__item">
                            <img src="https://picsum.photos/200" alt="foto" className="item__img"/>
                            <h3 className="item__title">Matematyka 1. Podręcznik. Zakres podstawowy</h3>
                            <p className="item__price">50 zł</p>
                            <RiDeleteBin7Fill className="item__remove"/>
                        </li>
                        <li className="products__item">
                            <img src="https://picsum.photos/200" alt="foto" className="item__img"/>
                            <h3 className="item__title">Matematyka 1. Podręcznik. Zakres podstawowy</h3>
                            <p className="item__price">50 zł</p>
                            <RiDeleteBin7Fill className="item__remove"/>
                        </li>
                        <li className="products__item">
                            <img src="https://picsum.photos/200" alt="foto" className="item__img"/>
                            <h3 className="item__title">Matematyka 1. Podręcznik. Zakres podstawowy</h3>
                            <p className="item__price">50 zł</p>
                            <RiDeleteBin7Fill className="item__remove"/>
                        </li>
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