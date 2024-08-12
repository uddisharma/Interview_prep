const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require("redux-logger");
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require("../features/icecream/IceSlice")
const logger = reduxLogger.createLogger()

const store = configureStore({
    // combine reducers
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },
    // logger middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store
