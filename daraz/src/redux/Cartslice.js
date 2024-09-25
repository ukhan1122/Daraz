import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:[],
    totalquantity : 0
}

const Cartslice = createSlice({
    name :"Cart",
    initialState,
    reducers:{
        additemcart(state,action){
            const newitem = action.payload;
            if(!state.items){
                state.items = []
            }
            const existingitem = state.items.find(item=> item.id === newitem.id)
            if(!existingitem){
                state.items.push({
                    id:newitem.id,
                    title:newitem.title,
                    quantity:1,
                    price:newitem.price,
                    totalprice:newitem.price,

                })
                state.totalquantity++;

            }else{
                existingitem.quantity++;
                existingitem.totalprice += newitem.price;
            }
        }
    }
})
export const {additemcart} = Cartslice.actions
export default Cartslice.reducer