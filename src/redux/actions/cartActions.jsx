import axios from "axios";
import * as actionTypes from "../constans/cartConstants";

export const addToCart = (id) => async (dispatch, getState) => {
    const response = await axios.get(`http://localhost:3001/api/books/${id}`)
    const data = response.data.data;

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: data.id,
            title: data.title,
            author: data.author,
            cover_url: data.cover_url,
            pages: data.pages,
            price: data.price,
            currency: data.currency,
        }
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}