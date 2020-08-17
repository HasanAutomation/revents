import modalReducer from "../common/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";

const { combineReducers } = require("redux");
const { testReducer } = require("../../features/sandbox/testReducer");
const { eventReducer } = require("../../features/events/eventReducer");

const rootReducer=combineReducers({
    test:testReducer,
    event:eventReducer,
    modals:modalReducer,
    auth:authReducer
})

export default rootReducer;