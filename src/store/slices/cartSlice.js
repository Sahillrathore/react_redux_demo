import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartQty: [],
    cartTotal: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            // state.cartItems.push(action.payload);
            // state.cartTotal.push(action.payload.price);
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id );

            if(itemIndex >= 0) {
                state.cartItems[itemIndex].productQuantity +=1;
            }

            else {
                const proItems = { ...action.payload, productQuantity: 1}
                state.cartItems.push(proItems);
            }
        },
        removeFromCart: (state, action) => {
            
            const findex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if(findex >= 0) {
                if(state.cartItems[findex].productQuantity > 1 ) {
                    state.cartItems[findex].productQuantity -= 1;
                }

                else {
                    state.cartItems.splice(findex, 1);
                }
            }
            
            // console.log(findex);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer