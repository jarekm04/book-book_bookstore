import {useDispatch} from "react-redux";
import {removeFromCart} from "../redux/actions/cartActions";
import {RiDeleteBin7Fill} from "react-icons/ri";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const { id, cover_url, title, price } = item;

    const removeCartItem = (id) => {
        dispatch(removeFromCart(id))
    };

    return (
        <li className="products__item">
            <img src={cover_url} alt={cover_url} className="item__img"/>
            <h3 className="item__title">{title}</h3>
            <p className="item__price">{price}zł</p>
            <RiDeleteBin7Fill className="item__remove" onClick={() => removeCartItem(id)}/>
        </li>
    );
};

export default CartItem;