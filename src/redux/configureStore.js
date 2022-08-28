import { createStore,combineReducers } from "redux";
import allDataReducer from "./reducers/allDataReducer";

const reducer = combineReducers({
    allDataReducer,
})

function configureStore() {
    return createStore(reducer)
}

export default configureStore