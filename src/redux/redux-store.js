import { applyMiddleware, createStore } from "redux";
import quoteReducer from "./quote-reducer";
import thunkMiddleware from "redux-thunk";

const store = createStore(quoteReducer, applyMiddleware(thunkMiddleware));
export default store;
