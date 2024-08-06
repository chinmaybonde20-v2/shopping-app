import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedCategory: null,
  },
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        console.log("loading");
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        console.log("failed");
      });
  },
});

export const { setSelectedCategory } = productsSlice.actions;

export default productsSlice.reducer;
