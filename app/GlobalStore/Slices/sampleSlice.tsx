import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface counterSliceProps {
  value: number;
}

const initialState: counterSliceProps = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter-slice",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;

// Export RootStateValues Directly

export const centralCounterValue = (state: RootState) => state.counter.value;
