const { createSlice } = require("@reduxjs/toolkit")



const cartInitialState={cart:'close'}

const cartSlice=createSlice({
    name:'cart',
    initialState:cartInitialState,
    reducers:{
        openCart(state){
            state.cart='open'
        },
        closeCart(state){
            state.cart='close'
        }
    }
})

export const cartActions=cartSlice.actions

export default cartSlice.reducer