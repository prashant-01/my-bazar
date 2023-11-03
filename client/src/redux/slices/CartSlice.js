import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems : [] ,
    userInfo : null ,
}
const CartSlice = createSlice({
    name : 'cart' , 
    initialState ,
    reducers : {
        addToCart : (state , action) => {
            const item = state.cartItems.find((item) => item._id === action.payload._id)
            if(item){
                item.qty += action.payload.qty;
            }
            else{
                state.cartItems = [ ...state.cartItems , action.payload ] ;
            }
        } , 
        removeToCart : (state , action) => {
            state.cartItems = state.cartItems.filter((item) => ( item._id !== action.payload ));
        } ,
        increaseQty : (state , action) => {
            const item = state.cartItems.find((item) => item._id === action.payload._id);
            item.qty = action.payload.qty+1;
        } , 
        decreaseQty : (state , action) => {
            const item = state.cartItems.find((item) => item._id === action.payload._id);
            if(item.qty === 1){
                state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
            }
            else{
                item.qty = action.payload.qty-1;
            }
        } , 
        resetCart : (state) => {
            state.cartItems = [] ;
        } ,
        addUser: (state, action) => {
            state.userInfo = action.payload;
        } ,
        removeUser: (state) => {
            state.userInfo = null;
        } ,
    }
});

export const { 
    addToCart , 
    removeToCart , 
    increaseQty , 
    decreaseQty , 
    resetCart , 
    addUser , 
    removeUser ,
} = CartSlice.actions;
export default CartSlice.reducer;