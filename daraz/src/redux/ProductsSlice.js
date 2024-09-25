import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : null,
    products : [],
    isloading : false,
    error : null

}
const ProductSlice = createSlice ({

    name : "products",
    initialState,
    reducers :{
        createproductstart : (state)=>{
            state.isloading = true;
            state.error = null
        },
        createproductsuccess : (state,action)=>{
            state.product = action.payload;
            state.products.push(action.payload); 
            state.isloading = false
        },
        createproductfailure :(state,action) =>{
            state.error = action.payload;
            state.isloading = false
        },
        clearproduct :(state)=>{
            state.product = null
        }
    }
})

export const {
    createproductstart,
    createproductsuccess,
    createproductfailure,
    clearproduct
}  = ProductSlice.actions

export default ProductSlice.reducer