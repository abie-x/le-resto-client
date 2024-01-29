import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' 
import { composeWithDevTools } from 'redux-devtools-extension'
import {userRegisterReducer, userLoginReducer} from "./reducers/userReducer"
import {cartReducer} from './reducers/cartReducer'


const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    // RestaurentSearchList: RestaurentSearchListReducer,
    // RestaurentAmbienceList: RestaurentAmbienceListReducer,
    // RestaurentCuisineList: RestaurentCuisineListReducer,
    // RestaurentMenuList: RestaurentMenuListReducer,
    cart: cartReducer,
    // orderCreate: orderCreateReducer,
    // candidateList: candidateListReducer,
    // candidateInfo: candidateReducer,
    // vote: voteReducer,
    // tableNumber: setTableNumberReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
    cart: {cartItems: cartItemsFromStorage},
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store