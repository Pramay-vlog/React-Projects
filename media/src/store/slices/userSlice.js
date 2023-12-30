import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../thunks/user/getUsers";
import { addUser } from "../thunks/user/addUsers";
import { deleteUser } from "../thunks/user/deleteUser";


const userSlice = createSlice({

    name: "users",
    initialState: {

        data: [],
        isLoading: false,
        error: null

    },
    extraReducers(builder) {

        // GET API
        builder.addCase(getUsers.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        // POST API
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });

        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        // DELETE API
        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = true;
            state.data = state.data.filter((data) => data.id !== action.meta.arg.id)
        })

        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = true;
            state.error = action.error;
        })

    }

})

export const userReducer = userSlice.reducer;