import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
    loginReducer,productsReducer
});

export default rootReducer;