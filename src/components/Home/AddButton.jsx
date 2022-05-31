import {addToCart} from "../../redux/actions/cartActions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

const AddButton = ({id}) => {
    const [btnText, setBtnText] = useState("Dodaj do koszyka");
    const [btnClass, setBtnClass] = useState("book__add");
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    if (localStorage.getItem("btns") == null) {
        localStorage.setItem("btns", "[]");
    }
    const btnsIDsArray = JSON.parse(localStorage.getItem("btns"));
    const cartIDsArray = JSON.parse(localStorage.getItem("cart")).map(item => item.id);

    const handleAddToCart = () => {
        // if (btnsIDsArray.indexOf(id) === -1) {
        //     btnsIDsArray.push(id);
        // }
        // localStorage.setItem("btns", JSON.stringify(btnsIDsArray));

        if (btnText === "Dodaj do koszyka") {
            setBtnText("Dodano produkt");
            setBtnClass("book__add added");
            dispatch(addToCart(id));
        }
    }

    // useEffect(() => {
    //     console.log(btnsIDsArray)
    //     console.log(cartIDsArray)
    //
    //     for (let i = 0; i < cartIDsArray.length; i++) {
    //         for (let j = 0; j < btnsIDsArray.length; j++) {
    //             if (cartIDsArray[i] === btnsIDsArray[j]) {
    //                 setCartBtn("Dodano produkt");
    //                 setBtnClass("book__add added");
    //             }
    //         }
    //     }
    // }, [])

    return (
        <button
            className={btnClass}
            onClick={handleAddToCart}
            id={id}
        >
            {btnText}
        </button>
    );
};

export default AddButton;