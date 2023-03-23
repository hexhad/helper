import { combineReducers, createStore } from "redux";
import main from "./ducks";

const rootReducer = combineReducers({
    main,
})

 const store = createStore(rootReducer);

 export default store;