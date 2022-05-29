import * as actionTypes from "../constans/cartConstants";
import axios from "axios";

export const addToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3001/api/books/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data.id,
            title: data.title,
            author: data.author,
            cover_url: data.cover_url,
            pages: data.pages,
            price: data.price,
            currency: data.currency
        }
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}