"use client";

import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./slices/booksSlice";

const store = configureStore({
    reducer: {
        [booksSlice.name]: booksSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
});

export default store;
