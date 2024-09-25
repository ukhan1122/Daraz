import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    orders: [],
    totalprice:0

}
const OrderSlice = createSlice ({
    name:"order",
    initialState,
      reducers:{
        placeorder : (state,action) =>{
            state.orders = action.payload;
        },
        settotalprice(state,action){
            state.totalprice = action.payload
        }
      }
})

export const { placeorder,settotalprice} = OrderSlice.actions;
export default OrderSlice.reducer    