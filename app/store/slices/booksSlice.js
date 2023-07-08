import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    filteredList: [],
    favourites: [],
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        // set Books in state
        setBooks: (state, action) => {
            state.list = action.payload;
        },
        setFilteredList: (state, action) => {
            state.filteredList = action.payload;
        },
        setFavourites: (state, action) => {
            state.favourites = action.payload;
        },
    },
});

export const { setBooks, setFilteredList, setFavourites } = booksSlice.actions;

// exporting the whole slice to use its name and reducer
export default booksSlice;
