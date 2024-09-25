import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    isauthenticated : false
}

const Userslice = createSlice({
    name:"user",
    initialState,
    reducers :{
       login:(state,action)=>{
         state.user = action.payload;
         state.isauthenticated = true
       },
       logout:(state)=>{
        state.user= null;
        state.isauthenticated = false
       }
    }
})
export const {login,logout} = Userslice.actions
export default Userslice.reducer