import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


interface CurrencyState {
    rates: { [key: string]: number }
}

const initialState: CurrencyState = {
    rates: {}
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setRates: (state, action: PayloadAction<{ [key: string]: number }>) => {
            state.rates = action.payload;
        }
    }
})

export const {setRates} = currencySlice.actions
export default currencySlice.reducer