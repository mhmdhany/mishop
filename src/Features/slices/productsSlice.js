import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Fetch All products
export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);
// Fetch Custom Product
export const fetchProduct = createAsyncThunk(
  "productsSlice/fetchProduct",
  async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  }
);
// Fetch product of specific Category
export const fetchCategory = createAsyncThunk(
  "productsSlice/fetchCategory",
  async (category) => {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await res.json();
    return data;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    productId: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch products cases
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
    });

    // Fetch Custom Product cases
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.productId = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
    });

    // Fetch product of specific Category
    builder.addCase(fetchCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default productsSlice.reducer;
