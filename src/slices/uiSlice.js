import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  loading: true
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.loading
    }
  }
})

export const {setLoading} = uiSlice.actions;
export default uiSlice.reducer;