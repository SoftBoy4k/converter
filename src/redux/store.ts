import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./Slices/currencySlice"

export const store = configureStore({
    reducer: {
        currency: currencyReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>