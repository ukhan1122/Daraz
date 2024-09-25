import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../redux/userSlice';
import productsSlice from '../redux/ProductsSlice';
import Cartslice from '../redux/Cartslice';
import OrderSlice from '../redux/OrderSlice';

export const store = configureStore({
    reducer:{
        user:userSlice,
        product : productsSlice,    
        cart : Cartslice,
        order : OrderSlice

    }
})

export default store;