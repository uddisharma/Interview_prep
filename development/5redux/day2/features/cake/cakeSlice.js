const createSlice = require("@reduxjs/toolkit").createSlice

const cakeSlice = createSlice({
    name: 'cake',
    initialState: {
        numOfCakes: 10
    },
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions