import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './storeReducer'



const store=configureStore({
    reducer:{cart:cartReducer}
})

export default store;