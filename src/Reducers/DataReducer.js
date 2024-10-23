import { createReducer } from "@reduxjs/toolkit";

// Define initial state for DataReducer
const initialDataState = {
    loading: false,
    allTickets: [],
    allUser: [],
};

// DataReducer with builder callback notation
export const DataReducer = createReducer(initialDataState, (builder) => {
    builder
        .addCase("DATA_REQUEST", (state) => {
            state.loading = true;
        })
        .addCase("DATA_SUCCESS", (state, action) => {
            state.loading = false;
            state.allTickets = action.payload.tickets;
            state.allUser = action.payload.users;
        })
        .addCase("DATA_FAILURE", (state) => {
            state.loading = false;
            state.allTickets = [];
            state.allUser = [];
        });
});

// Define initial state for SelectDataReducer
const initialSelectDataState = {
    loading: false,
    selectedData: [],
    user: null,
    message: null,
};

// SelectDataReducer with builder callback notation
export const SelectDataReducer = createReducer(initialSelectDataState, (builder) => {
    builder
        .addCase("SELECT_DATA_REQUEST", (state) => {
            state.loading = true;
            state.selectedData = [];
        })
        .addCase("SELECT_DATA_SUCCESS", (state, action) => {
            state.loading = false;
            state.selectedData = action.payload.selectedData;
            state.user = action.payload.user;
        })
        .addCase("SELECT_DATA_FAILURE", (state, action) => {
            state.loading = false;
            state.selectedData = [];
            state.message = action.payload.message;
        });
});
