const store = require("./app/store")
const cakeActions = require("./features/cake/cakeSlice").cakeActions
const icecreamActions = require("./features/icecream/IceSlice").icecreamActions;

const unsubscribe = store.subscribe(() => { // listening to changes in state
    console.log(store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(1))
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(1))

unsubscribe()