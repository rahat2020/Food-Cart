import { createStore, combineReducers} from "redux";
import foodReducer from "./reducer/foodReducer";

const combineReducer =  combineReducers({

    foods: foodReducer,
})

export const store = createStore(combineReducer)