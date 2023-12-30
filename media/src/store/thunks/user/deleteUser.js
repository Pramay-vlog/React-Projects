import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk("users/delete", async (userData) => {

    const result = await axios.delete(`http://localhost:3005/users/${userData.id}`)

    return result.data;

})

export { deleteUser };