import { act } from "react-dom/test-utils";

const { createSlice } = require("@reduxjs/toolkit");

const cartInitialState = {
  cart: "close",
  noOfItems: 0,
  items: [],
  storing: false,
  retrieving: false,
  failed: false,
};

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
      if (state.items[parseInt(action.payload.id)]) {
        console.log(state.items[parseInt(action.payload.id)].quantity);
        state.noOfItems = state.noOfItems + 1;
        state.items[parseInt(action.payload.id)].quantity =
          state.items[parseInt(action.payload.id)].quantity + 1;
      } else {
        console.log("not there");
        state.items = [...state.items, action.payload];
        state.noOfItems = state.noOfItems + 1;
      }

      state.storing = true;
      fetch("https://movies-ae6a0-default-rtdb.firebaseio.com/ecart.json", {
        method: "PUT",
        body: JSON.stringify(state.items),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
          } else {
            alert("failed");
            state.failed = true;
          }
        })
        .then((data) => {
          console.log(data);
        });
       setTimeout(() => {
        state.storing = false; 
       }, 2000);
      
      state.failed = false;
    },
    increaseItemQuantity(state, action) {
      state.noOfItems = state.noOfItems + 1;
      state.items[parseInt(action.payload)].quantity =
        state.items[parseInt(action.payload)].quantity + 1;
      state.storing = true;
      fetch("https://movies-ae6a0-default-rtdb.firebaseio.com/ecart.json", {
        method: "PUT",
        body: JSON.stringify(state.items),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
          } else {
            alert("failed");
            state.failed = true;
          }
        })
        .then((data) => {
          console.log(data);
        });

      setTimeout(() => {
        state.storing=false
      },2000);
      state.failed = false;
    },

    GetData(state) {
      state.retrieving = true;
      fetch("https://movies-ae6a0-default-rtdb.firebaseio.com/ecart.json", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
          } else {
            console.log("failed to fetch");
            state.failed=true
            setTimeout(() => {state.failed=false},1000);
          }
        })
        .then((data) => {
          console.log(data);
        });

      state.retrieving = false;
    },

    decreaseItemQuantity(state, action) {
      if (state.items[parseInt(action.payload)].quantity < 1) {
        console.log(action.payload);
        state.items = state.items.filter(
          (item) => parseInt(item.id) !== parseInt(action.payload)
        );
      } else {
        state.noOfItems = state.noOfItems - 1;
        state.items[parseInt(action.payload)].quantity =
          state.items[parseInt(action.payload)].quantity - 1;
      }

      state.storing = true;
      fetch("https://movies-ae6a0-default-rtdb.firebaseio.com/ecart.json", {
        method: "PUT",
        body: JSON.stringify(state.items),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
          } else {
            alert("failed");
            state.failed = true;
          }
        })
        .then((data) => {
          console.log(data);
        });
      state.storing = false;
      state.failed = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
