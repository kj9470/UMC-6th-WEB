import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 서버통신
export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async (_, thunkAPI) => {
  try {
    const response = await fetch('http://localhost:8080/musics');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  items: [],
  totalAmount: 0,
  totalCount: 0,
  status: 'idle', // 요청 상태를 관리하기 위해 추가
  error: null, // 오류 메시지를 관리하기 위해 추가
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.amount += 1;
      }
    },
    decrease: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.amount > 1) {
          item.amount -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    calculateTotals: (state) => {
      let totalAmount = 0;
      let totalCount = 0;
      state.items.forEach((item) => {
        totalAmount += item.price * item.amount;
        totalCount += item.amount;
      });
      state.totalAmount = totalAmount;
      state.totalCount = totalCount;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.map(item => ({ ...item, amount: 1 })); // 초기 amount 설정
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        alert(action.payload); // 에러 메시지 alert
      });
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
