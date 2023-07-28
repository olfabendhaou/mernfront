// importation

import { combineReducers } from "redux"
import contactReducer from "./contact"
import userReducer from "./user"
// reducers combination



const  rootReducer = combineReducers({contactReducer, userReducer});



export default rootReducer