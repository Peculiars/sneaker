import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem ={
    id: number,
    name: string,
    prize: number,
    details: string,
    quantity: number
};

type CartState = {
    items : CartItem[];
};

const initialState: CartState ={
    items:[]
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const product = state.items.find(item => item.id === action.payload.id);
            if (product) {
              product.quantity += action.payload.quantity;
            } else {
              state.items.push(action.payload);
            }
          },
          

        incrementQuantity: (state, action: PayloadAction<number>) => {
            const product = state.items.find(item => item.id === action.payload);
            if (product) {
              product.quantity++;
            }
          },
          
          decrementQuantity: (state, action: PayloadAction<number>) => {
            const product = state.items.find(item => item.id === action.payload);
            if (product && product.quantity > 1) {
              product.quantity--;
            }
          },

        removeItem: (state, action: PayloadAction<number>) =>{
            state.items = state.items.filter(item => item.id !== action.payload);
        },

        clearCart: (state)=>{
            state.items = []
        },
    }
});


export const {addToCart, removeItem, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;