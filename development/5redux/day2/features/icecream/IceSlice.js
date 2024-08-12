const { createSlice } = require('@reduxjs/toolkit');
const cakeActions = require('../cake/cakeSlice').cakeActions;

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: {
        numOfIcecreams: 20
    },
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--;
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            // Decrease ice cream count when a cake is ordered
            state.numOfIcecreams--;
        });
    }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
