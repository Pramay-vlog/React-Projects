import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//? This getUsers functions will get three values
//! getUsers.pending
//! getUsers.fulfilled
//! getUsers.rejected
//? This will be used in extra reducers funtion in slice.
//* Two time component will renders. 1. when action is pending, 2. action is fulfilled.


const getUsers = createAsyncThunk("users/get", async () => {

    const res = await axios.get("http://localhost:3005/users")

    return res.data

})


export { getUsers }