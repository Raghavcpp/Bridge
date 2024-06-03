import { combineReducers } from "redux"
import auth from "./authReducer"
import token from "./tokenReducer"
import users from './usersReducer'
import { reviewReducer, currentReviewReducer } from "./reviewReducer"
import { problemReducer } from "./problemReducer"
import { adminReducer } from "./adminReducer"

export default combineReducers({
    auth,
    token,
    users,
    reviews: reviewReducer,
    currentReview: currentReviewReducer,
    problemReducer,
    adminReducer
})