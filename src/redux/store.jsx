import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {cartReducer} from "./reducers/cartReducers";
import {getProductsReducer} from "./reducers/productReducers";

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer
});

const middleware = [thunk];

// const INITIAL_STATE = {
//     cart: {
//         cartItems: cartItemsInLocalStorage,
//     },
// };

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);



export default store;