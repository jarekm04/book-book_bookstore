import {RiDeleteBin7Fill} from "react-icons/ri";

const CartItem = ({ item, qtyChangeHandler, removeCartItem }) => {
    const { id, cover_url, title, price, quantity } = item;

    return (
        <li className="products__item">
            <img src={cover_url} alt={cover_url} className="item__img"/>
            <h3 className="item__title">{title}</h3>
            <select
                value={item.quantity}
                onChange={e => qtyChangeHandler(item.id, parseInt(e.target.value))}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <p className="item__price">{price * quantity}zł</p>
            <RiDeleteBin7Fill className="item__remove" onClick={() => removeCartItem(id)}/>
        </li>
    );
};

export default CartItem;