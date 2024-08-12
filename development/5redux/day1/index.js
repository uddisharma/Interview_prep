const redux = require("redux");

const createStore = redux.createStore;
const actionBindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


// actions
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

const action1 = () => {
    return {
        type: INCREMENT,
        payload: 1
    }
}


// reducer
const initailState = {
    count: 0
}

const reducer = (state = initailState, action) => {

    switch (action.type) {

        case INCREMENT:
            return {
                count: state.count + 1
            }

        case DECREMENT:
            return {
                count: state.count - 1
            }

        default:
            return state
    }
}


//store
const store = createStore(reducer) // holds that app state
console.log(store.getState()) // access the state

const unsubscribe = store.subscribe(() => { // subscribed to the store ( will run every time the state changes )
    console.log('[Subscription]', store.getState())
})

store.dispatch(action1())  // update the state
store.dispatch({ type: DECREMENT }) // update the state
store.dispatch({ type: INCREMENT })
store.dispatch({ type: INCREMENT })
store.dispatch({ type: INCREMENT })

unsubscribe()  // unsubscribed from the store


//actionBindActionCreators
const action = actionBindActionCreators({ action1 }, store.dispatch)
action.action1()

//combineReducers
const rootReducer = combineReducers({ reducer })
const store2 = createStore(rootReducer, applyMiddleware(logger)) // we can pass more than 1 middleware in it
console.log(store2.getState())
