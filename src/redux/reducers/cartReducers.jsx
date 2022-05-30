import * as actionTypes from "../constans/cartConstants";

const CART_INITIAL_STATE = {
    cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const existItem = state.cartItems.find((x) => x.id === item.id);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.id === existItem.id ? item : x
                    )
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems,item]
                }
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.id !== action.payload
                )
            };
        case actionTypes.CART_RESET:
            return {
                ...state,
                cartItems: []
            }

        default:
            return state;
    }

}