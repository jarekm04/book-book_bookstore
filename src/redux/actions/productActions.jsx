import * as actionTypes from "../constans/productConstants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCTS_REQUEST});

        const response = await axios.get(`http://localhost:3001/api/books?page=1`);
        const data = response.data.data;

        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message
        })
    }
}