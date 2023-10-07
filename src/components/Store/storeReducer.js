import { act } from "react-dom/test-utils";

const { createSlice } = require("@reduxjs/toolkit");

const cartInitialState = { cart: "close",noOfItems:0, items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    openCart(state) {
      state.cart = "open";
    },
    closeCart(state) {
      state.cart = "close";
    },
    addItemToCart(state, action) {
        if(state.items[parseInt(action.payload.id)])
        {
            console.log(state.items[parseInt(action.payload.id)].quantity)
            state.noOfItems=state.noOfItems+1
            state.items[parseInt(action.payload.id)].quantity= state.items[parseInt(action.payload.id)].quantity+1
         

        }else{
            console.log('not there')
            state.items = [...state.items, action.payload];
            state.noOfItems=state.noOfItems+1
        }
      
    },
    increaseItemQuantity(state, action) {
        state.noOfItems=state.noOfItems+1
      state.items[parseInt(action.payload)].quantity= state.items[parseInt(action.payload)].quantity+1
    },
    decreaseItemQuantity(state, action) {
      if (state.items[parseInt(action.payload)].quantity < 1) {
        console.log(action.payload)
        state.items=state.items.filter((item)=>(parseInt(item.id)!== parseInt(action.payload)))
      }
      else{
        state.noOfItems=state.noOfItems-1
        state.items[parseInt(action.payload)].quantity= state.items[parseInt(action.payload)].quantity-1
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
