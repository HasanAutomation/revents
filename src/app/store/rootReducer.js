import modalReducer from "../common/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../async/asyncReducer";

const { combineReducers } = require("redux");
const { testReducer } = require("../../features/sandbox/testReducer");
const { eventReducer } = require("../../features/events/eventReducer");

const rootReducer=combineReducers({
    test:testReducer,
    event:eventReducer,
    modals:modalReducer,
    auth:authReducer,
    async:asyncReducer
})

export default rootReducer;