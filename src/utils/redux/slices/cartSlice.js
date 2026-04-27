import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : { items: [] };
  };
const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    addToCart: (state, action) => {
        const existing = state.items.find(
          (item) => item.id === action.payload.id
        );
        if (existing) {
          existing.quantity += 1;
        } else {
          state.items.push({
            id: action.payload.id,
            title: action.payload.title,
            price: action.payload.price,
            image: action.payload.image,
            quantity: 1,
          });
        }
        localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
        const existing = state.items.find(
          (item) => item.id === action.payload.id
        );
      
        if (!existing) return;
      
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
        localStorage.setItem("cart", JSON.stringify(state));
      }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;