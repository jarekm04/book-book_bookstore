import {RiDeleteBin7Fill} from "react-icons/ri";

const CartItem = ({ id, cover_url, title, price }) => {
    return (
        <li className="products__item" key={id}>
            <img src={cover_url} alt={cover_url} className="item__img"/>
            <h3 className="item__title">{title}</h3>
            <p className="item__price">{price}zł</p>
            <RiDeleteBin7Fill className="item__remove"/>
        </li>
    );
};

export default CartItem;