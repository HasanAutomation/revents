const { combineReducers } = require("redux");
const { testReducer } = require("../../features/sandbox/testReducer");
const { eventReducer } = require("../../features/events/eventReducer");

const rootReducer=combineReducers({
    test:testReducer,
    event:eventReducer
})

export default rootReducer;